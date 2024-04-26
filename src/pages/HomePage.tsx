import { FaArrowRight, FaArrowLeft, FaEye } from "react-icons/fa";
// import * as vocab_EL from "../";
import vocab_EL from "../../vocab_EL.json";
import { useState } from "react";

const vc_EL = vocab_EL.vocab_EL;
const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <section>
      <div className="card w-96 glass">
        {/* <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure> */}
        <div className="base-content">
          <div className="w-fill h-[200px] bg-slate-100 opacity-80 rounded-t-xl flex flex-col justify-center items-center p-4 text-slate-700 text-4xl gap-4">
            <div className="text-6xl">{vc_EL[0].英語}</div>

            <div
              className={
                isMounted
                  ? "transition-all opacity-100 scale-100 duration-500 delay-100 text-red-800"
                  : "transition-all opacity-0 text-blue-800"
              }
              onAnimationEnd={() => {
                if (!isMounted) setShow(false);
              }}
            >
              {vc_EL[0].意味}
            </div>
          </div>
          <div className="p-4">
            <div className="justify-end pt-4 card-actions">
              <button
                className="mr-8 border btn-ghost btn border-1 border-slate-100"
                onClick={() => {
                  setIsMounted(!isMounted);
                  if (!show) setShow(true); //We should Render our Div
                }}
              >
                <FaEye className="w-[40px]" />
              </button>
              <button className="btn btn-primary">
                <FaArrowLeft />
              </button>
              <button className="btn btn-primary">
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
