<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();

            // Game Sessions
            // $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->float('hours_played')->nullable();
            $table->string('mood')->nullable();
            $table->text('notes')->nullable();
            $table->date('played_on')->nullable;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
