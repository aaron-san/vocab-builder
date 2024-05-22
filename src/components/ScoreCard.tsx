import React, { ReactElement } from "react";
import { motion } from "framer-motion";

const ScoreCard = ({
  points,
  addPoints,
}: {
  points: number;
  addPoints: boolean;
}): ReactElement => {
  const variants = {
    addPoints: {
      scale: [0, 2, 1],
      opacity: [0, 0.5, 1],
      transition: { duration: 0.5 },
      backgroundColor: ["#dbf544", "#6eeb8d", "#4ce9fa"],
      borderRadius: ["15px", "50px", "15px"],
    },
    correctButton: {
      scale: 0.9,
      backgroundColor: "#6eeb8d",
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="absolute -right-20 -top-2 text-center">
      <h2>Score</h2>
      <motion.div
        className="bg-blue-300 border border-slate-200 text-slate-800 px-4 py-2 text-xl rounded-md"
        variants={variants}
        animate={addPoints ? "addPoints" : ""}
      >
        {points}
      </motion.div>
    </div>
  );
};

export default ScoreCard;
