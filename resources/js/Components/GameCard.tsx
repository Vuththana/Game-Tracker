import { useForm, router } from "@inertiajs/react";
import { FaClock, FaTrash } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";

interface GameCardProps {
    id: number,
    name: string;
    hours_played: number;
    mood: string;
    notes?: string;
    played_on: string;
}

const GameCard: React.FC<GameCardProps> = ({
    id,
    name,
    hours_played,
    mood,
    notes,
    played_on
}) => {

    const handleDelete = (id: number) => {
        router.delete(route("games.destroy", { id }));
    }

    return(
        <div
            className="p-4 border rounded-lg border-green-900 hover:border-green-600 transition-colors duration-300"
        >
            <div
                className="flex justify-between"
            >
                <h2
                    className="text-xl font-bold text-white rounded-2xl shadow"
                >
                    {name}
                </h2>
                <button
                    onClick={() => handleDelete(id)}
                    className="text-white"
                >
                    <FaTrash
                        className="hover:text-red-800"
                    />
                </button>
            </div>

            <div
                className="flex space-x-4"
            >
                <p
                    className="text-sm text-gray-400"
                >
                {played_on}  
                </p>
                <p
                    className="text-sm text-gray-400 flex items-center gap-1"
                >
                     <FaClock /> {hours_played}h
                </p>
            </div>

            <span
                className="text-white flex items-center gap-2 mt-4"
            >
                <FaFaceSmile className="text-purple-600"/>
                {mood === "😄"
                ? "😄 Happy"
                : mood === "😐"
                ? "😐 Neutral"
                : mood === "😞"
                ? "😞 Frustrated"
                : ""}
            </span>

            <p
                className="text-gray-400 text-sm mt-2"
            >{notes}</p>
        </div>
    );
};

export default GameCard;