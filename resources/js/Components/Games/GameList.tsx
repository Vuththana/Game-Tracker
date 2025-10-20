import { PageProps } from "@/types";
import GameCard from "../GameCard"
import { FaClock } from "react-icons/fa";

interface Game {
    id: number;
    name: string;
    hours_played: number;
    mood: string;
    played_on: string;
    notes: string
  }

const GameList: React.FC<PageProps<{
    games: Game[]
}>> = ({games}) => {
    return (
    <div className="mt-8">
        <h2 className="text-[30px] font-bold mb-3 text-white flex items-center gap-2">
            <FaClock 
                className="text-purple-700"
            /> 
            Recent Sessions
        </h2>
        <div
            className="grid md:grid-cols-2 gap-4"
        >
            {games.map((game) => (
                <GameCard
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    mood={game.mood}
                    hours_played={game.hours_played}
                    played_on={game.played_on}
                    notes={game.notes}
                />
            ))}
        </div>

    </div>
    )

}

export default GameList;