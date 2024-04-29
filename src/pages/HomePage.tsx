import { FaArrowRight, FaArrowLeft, FaEye } from "react-icons/fa";

// import * as vocab_EL from "../";
import vocab_EL from "../../vocab_EL.json";
import { useState } from "react";
import // motion,

"framer-motion";

const vc_EL = vocab_EL.vocab_EL;

const HomePage = () => {
  const [id, setId] = useState<number>(0);

  // const variants = {
  //   next: {
  //     opacity: [0.8, 1],
  //     // x: ["5px", "-5px"],
  //   },
  //   back: {
  //     opacity: [0.5, 0, 0, 0.5, 1],
  //     x: ["-25px", "-50px", "50px", "25px", "0px"],
  //   },
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showNext, setShowNext] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showMeaning, setShowMeaning] = useState<boolean>(false);

  const handleNext = () => {
    setShowMeaning(false);
    setShowNext(true);
    setId(id === vc_EL.length ? vc_EL.length : id + 1);
  };

  const handleBack = () => {
    setShowMeaning(false);
    setShowBack(true);
    setId(id === 0 ? 0 : id - 1);
  };

  const handleShow = () => {
    setShowMeaning(!showMeaning);
  };

  //   <figure>
  //   <img
  //     src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
  //     alt="car!"
  //   />
  // </figure>

  // const anim = (
  //   dir: string
  // ):
  //   | boolean
  //   | AnimationControls
  //   | TargetAndTransition
  //   | VariantLabels
  //   | undefined => {
  //   switch (dir) {
  //     case "next":
  //       return { x: ["50px", "-50px", "0px"], opacity: [0, 0.5, 1] };
  //       break;
  //   }
  // };

  return (
    <section>
      <div className="w-[350px]">
        <div className="border base-content border-slate-200 rounded-xl border-spacing-5">
          <div className="w-fill h-[200px] bg-slate-100 opacity-80 rounded-t-xl flex flex-col justify-center items-center p-4 text-slate-700 text-4xl gap-4">
            <div className="text-6xl">{vc_EL[id].英語}</div>

            {/* <div
                className={
                  isMounted
                    ? "transition-all opacity-100 scale-100 duration-500 delay-100 text-red-800"
                    : "transition-all opacity-0 text-blue-800"
                }
                onAnimationEnd={() => {
                  if (!isMounted) setShow(false);
                }}
              > */}

            {showMeaning && (
              <div className="text-red-800">{vc_EL[id].意味}</div>
            )}
            {/* </div> */}
          </div>
          <div className="p-4">
            <div className="justify-end pt-4 card-actions">
              <button
                className="mr-8 border btn-ghost btn border-1 border-slate-100"
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
        </div>
      </div>
    </section>
  );
};

export default HomePage;
