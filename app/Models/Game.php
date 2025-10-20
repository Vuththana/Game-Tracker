<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = [
        'name',
        'hours_played',
        'mood',
        'notes',
        'played_on',
    ];
}
