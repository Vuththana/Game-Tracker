import { motion } from "framer-motion";

const TitleSection = () => {
    return (
        <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-[50px] font-bold bg-gradient-to-br
                    from-green-800 to-purple-500 bg-clip-text text-transparent"
        >
          🎮 Game Tracker
        </h1>
        <p className="text-semibold text-gray-400 text-[16px]">
          Track your gaming sessions and moods
        </p>
      </motion.div>

    )
}

export default TitleSection;