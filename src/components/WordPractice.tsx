import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaEye } from "react-icons/fa";
import vocab_el from "../../vocab_el.json";

const FlashCardPractice = () => {
  const [id, setId] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showNext, setShowNext] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showMeaning, setShowMeaning] = useState<boolean>(false);

  const variants = {
    showNext: {
      x: [0, 2, 0],
      opacity: [1, 0.8, 1],
      transition: { duration: 0.5 },
    },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    showBack: {
      x: [0, -2, 0],
      opacity: [1, 0.8, 1],
      transition: { duration: 0.5 },
    },
  };

  useEffect(() => {
    // Reset values
    showNext && setTimeout(() => setShowNext(false), 600);
    showBack && setTimeout(() => setShowBack(false), 600);
  }, [showNext, showBack]);

  const handleNext = () => {
    setShowMeaning(false);
    setShowNext(true);
    setId(id === vocab_el.length ? vocab_el.length : id + 1);
  };

  const handleBack = () => {
    setShowMeaning(false);
    setShowBack(true);
    setId(id === 0 ? 0 : id - 1);
  };

  const handleShow = () => {
    setShowMeaning(!showMeaning);
  };

  return (
    <section>
      <div className="w-[350px] mx-auto">
        <motion.div
          className="border base-content border-slate-800 rounded-xl border-spacing-5"
          variants={variants}
          animate={(function () {
            if (showNext) {
              return "showNext";
            } else if (showBack) {
              return "showBack";
            }
          })()}
        >
          <div className="w-fill h-[200px] bg-slate-100 opacity-80 rounded-t-xl flex flex-col justify-center items-center p-4 text-slate-700 text-4xl gap-4">
            {/* <AnimatePresence mode="wait" initial={false}> */}
            <motion.div
              className="text-6xl"
              initial={{ y: 10, opacity: 1 }}
              animate={{
                y: showMeaning ? -10 : 30,
                opacity: showMeaning ? 0 : 1,
              }}
              transition={{ type: "spring", duration: 1 }}
            >
              {vocab_el[id].英語}
            </motion.div>
            {/* </AnimatePresence> */}

            {/* <AnimatePresence mode="wait" initial={false}> */}
            <motion.div
              className="text-red-800"
              // layout
              initial={{
                y: -10,
                opacity: 0,
              }}
              animate={{
                opacity: showMeaning ? 1 : 0,
                y: showMeaning ? -10 : 50,
              }}
              transition={{
                type: "spring",
                duration: 1,
              }}
              // exit={{
              //   opacity: 0,
              // }}
            >
              {vocab_el[id].意味}
            </motion.div>
            {/* </AnimatePresence> */}
          </div>
          <div className="p-4">
            <div className="justify-end pt-4 card-actions">
              <button
                className="mr-8 border btn-ghost btn border-1 border-slate-800"
                onClick={handleShow}
              >
                <FaEye className="w-[40px]" />
              </button>
              <button className="btn btn-primary" onClick={handleBack}>
                <FaArrowLeft />
              </button>
              <button className="btn btn-primary" onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlashCardPractice;
