import { motion } from "framer-motion";
import InputGame from "@/Components/InputGame";
import SelectDate from "@/Components/SelectDate";
import SelectMood from "@/Components/SelectMood";
import TextAreaGame from "@/Components/TextAreaGame";
import { useForm } from "@inertiajs/react";

interface Game {
    id: number;
    name: string;
    hours_played: number;
    mood: string;
    played_on: string;
    notes: string
  }

const GameForm: React.FC = () => {

    const { data, setData, post, reset } = useForm({
        name: "",
        hours_played: 0,
        mood: "",
        notes: "",
        played_on: "",
      });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formattedDate = new Date().toISOString().split("T")[0];
        setData("played_on", formattedDate);
        post(route("games.store"), { onSuccess: () => reset() });
      };
    return(
        <motion.div
        className="border p-5 rounded-lg border-green-900 bg-black/20 mt-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h1 className="font-bold text-white text-[23px]">🎮 Log New Session</h1>
        <p className="text-gray-400">Track your latest gaming session</p>

        <form onSubmit={handleSubmit} className="space-y-4 mt-3">
          <div className="grid md:grid-cols-2 gap-4">
            <InputGame
              type="text"
              label="Game Name"
              placeholder="eg., Elden Ring"
              onChange={(e) => setData("name", e.target.value)}
            />

            <InputGame
              type="text"
              label="Hours Played"
              placeholder="eg., 2.5"
              onChange={(e) => setData("hours_played", Number(e.target.value))}
            />

            <SelectMood 
                value={data.mood} 
                onChange={(e) => setData("mood", e.target.value)}/>
            <SelectDate
                value={data.played_on}
                onChange={(value) => setData("played_on", value)}
                />
          </div>

          <TextAreaGame
            label="Notes"
            placeholder="How was your gaming session?"
            rows={4}
            onChange={(e) => setData("notes", e.target.value)}
          />

          <motion.button
            type="submit"
            className="border p-2 rounded-lg bg-green-600 border-transparent text-white w-full text-sm font-bold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Add Session
          </motion.button>
        </form>
      </motion.div>
    );
};

export default GameForm;