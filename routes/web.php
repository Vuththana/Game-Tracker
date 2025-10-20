<?php

use App\Http\Controllers\GameController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [GameController::class, 'index'])->name('games.index');

Route::post('/', [GameController::class, 'store'])->name('games.store');
Route::delete('/{id}', [GameController::class, 'destroy'])->name('games.destroy');

Route::middleware('auth')->group(function() {
    // Route::get('/games', [GameController::class, 'index'])->name('games.index');
    // Route::post('/games', [GameController::class, 'store'])->name('games.store');
    // Route::delete('/games/{game}', [GameController::class, 'destroy'])->name('games.destroy');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
