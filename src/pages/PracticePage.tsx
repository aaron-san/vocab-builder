// import * as vocab_EL from "../";
// import vocab_el from "../../vocab_el.json";
// import { useState } from "react";
import { motion } from "framer-motion";
import WordPractice from "../components/WordPractice";
import MeaningQuiz from "../components/MeaningQuiz";

const PracticePage = () => {
  return (
    <div className="bg-slate-200 text-slate-700 w-full py-8">
      <div className="py-8">
        <section>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
          >
            <WordPractice />
          </motion.div>
        </section>
      </div>
      <div className="bg-slate-700 text-slate-200 w-full py-8">
        <div className="py-8">
          <section className=" w-[800px] mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1.5 }}
            >
              <MeaningQuiz />
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;
