<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class GameController extends Controller
{
   public function index() {

    // Only get the data from the login user
    $games = Game::all();
    $totalGames = Game::count();
    $totalHours = Game::sum('hours_played');
    $mostGamePlayed = Game::select('name', DB::raw('COUNT(*) as total'))
        ->groupBy('name')
        ->orderByDesc('total')
        ->first();
    $mostHoursPlayed = Game::select('name', DB::raw('SUM(hours_played) as total_hours'))
        ->groupBy('name')
        ->orderByDesc('total_hours')
        ->first();

    return Inertia::render('Games/Index',  ['games' => $games, 
    'stats' => [
        'totalGames' => $totalGames,
        'totalHours' => $totalHours,
        'mostGamePlayed' => $mostGamePlayed,
        'mostHoursPlayed' => $mostHoursPlayed,
    ]]);

   }

   public function store(Request $request) {
    $validate = $request->validate([
        'name' => 'required|string|max:255',
        'hours_played' => 'nullable|numeric|min:0',
        'mood' => 'nullable|string',
        'notes' => 'nullable|string',
        'played_on' => 'required|date_format:Y-m-d',
    ]);

    $game = new Game;
    $game->name = $validate['name'];
    $game->hours_played = $validate['hours_played'];
    $game->mood = $validate['mood'];
    $game->played_on = $validate['played_on'];
    $game->notes = $validate['notes'];

    $game->save();

    // Redirect back to previous URL
    return redirect()->back();
   }

   public function destroy($id) {

    Game::destroy($id);
    return redirect()->back();
   }
}
