import { MouseEvent, useEffect, useState } from "react";
import vocab_el from "../../vocab_el.json";
import { IELWord } from "../types/types";
import { AnimatePresence, motion } from "framer-motion";
import ScoreCard from "./ScoreCard";

const MeaningQuiz = () => {
  //   let words_array = vocab_el.map((word) => word.英語);

  const [points, setPoints] = useState<number>(0);
  const [altMeanings, setAltMeanings] = useState<string[]>([]);

  const getAltMeanings = (obj: IELWord[]): string[] => {
    const altMeanings: string[] = [];

    // console.log(Math.floor(Math.random() * Object.keys(obj).length));
    while (altMeanings.length < 4) {
      const newId = Math.floor(Math.random() * obj.length);
      const newAltWord = obj[newId].意味;
      // console.log(newId);
      if (!altMeanings.includes(newAltWord)) {
        altMeanings.push(newAltWord);
      }
    }

    // for (let word of vocab_el) {
    //   return vocab_el.filter(word => {
    //     return (word.英語 === word)
    //   })
    // }
    return altMeanings;
  };

  const [wordId, setWordId] = useState<number>(0);
  const [isMatch, setIsMatch] = useState<boolean>(false);
  const [addPoints, setAddPoints] = useState<boolean>(false);

  useEffect(() => {
    const altWords = getAltMeanings(vocab_el);
    setAltMeanings(altWords);
  }, [wordId]);

  const variants = {
    addPoints: {
      scale: [0, 2, 1],
      opacity: [0, 0.5, 1],
      transition: { duration: 0.5 },
      backgroundColor: ["#dbf544", "#6eeb8d", "#4ce9fa"],
      borderRadius: ["15px", "50px", "15px"],
    },
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (vocab_el[wordId].意味 === e.currentTarget.innerText) {
      setIsMatch(true);
      setTimeout(() => setPoints(points + 1), 1000);

      // setWordId(wordId + 1);
      setTimeout(() => setWordId(wordId + 1), 1000);
      // setVariant("expand");

      // isMatch && vocab_el[wordId].意味 === meaning
      //                         ? "correctButton"
      //                         : ""
    }
  };

  useEffect(() => {
    // Reset isMatch
    // isMatch && setTimeout(() => setIsMatch(false), 400);
    setTimeout(() => setIsMatch(false), 200);
    setTimeout(() => setAddPoints(false), 500);
  }, [isMatch]);

  return (
    <>
      <section>
        <div className="my-10 w-2xl">
          <>
            <div className="relative">
              <ScoreCard points={points} addPoints={addPoints} />
              <div className="text-center text-4xl bg-slate-100 opacity-80 text-slate-800 py-4 rounded-t-md mb-6">
                {/* Word */}

                {vocab_el[wordId].英語}

                <div className="flex flex-row flex-wrap justify-around gap-2 text-slate-100 mt-4">
                  {altMeanings
                    .concat(vocab_el[wordId].意味)
                    .sort((a, b) => a.length - b.length)
                    .map((meaning) => {
                      return (
                        <>
                          {/* <AnimatePresence initial={false} mode={"wait"}> */}
                          <AnimatePresence initial={false} mode={"wait"}>
                            <motion.button
                              // layoutId={meaning}
                              variants={variants}
                              key={meaning}
                              // whileTap={{
                              //   backgroundColor: isMatch ? "green" : "red",
                              // }}
                              onClick={handleClick}
                              className="py-2 hover:bg-slate-600 w-[130px] active:translate-y-1 bg-slate-800 text-2xl mx-2 rounded-lg"
                              disabled={isMatch ? true : false}
                            >
                              {meaning}
                            </motion.button>
                          </AnimatePresence>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  );
};

export default MeaningQuiz;
