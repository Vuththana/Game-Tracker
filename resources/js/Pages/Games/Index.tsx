import { PageProps } from "@/types";
import GameForm from "@/Components/Games/GameForm";
import GameList from "@/Components/Games/GameList";
import TitleSection from "@/Components/Games/TitleSection";
import { Game } from "@/types/game";
import Dashboard from "@/Components/Games/Dashboard";

export default function Index({stats, games}: PageProps<{ 
    games: Game[], 
    stats : {
      totalGames: number; 
      totalHours: number, 
      mostGamePlayed: {
        name: string|null;
        total: number|null;
      },
      mostHoursPlayed: {
        total_hours: number|null;
      }
  } }>) {


  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Title Section */}
     <TitleSection />

     {/* Dashboard Section */}
     <Dashboard
      totalGames={stats.totalGames}
      totalHours={stats.totalHours}
      mostGamePlayed={stats.mostGamePlayed ?? { name: null, total: null }}
      mostHoursPlayed = {stats.mostHoursPlayed ?? null}
     />


      {/* Form Section */}
      <GameForm />

      {/* Games List */}
      <GameList
        games={games}
      />
    </div>
  );
}
