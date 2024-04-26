import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const HomePage = () => {
  return (
    <section>
      HomePage
      <div className="card w-96 glass">
        {/* <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure> */}
        <div className="p-0 card-body base-content">
          <div className="w-fill h-[200px] bg-slate-200 opacity-60 rounded-t-xl"></div>
          <div className="p-4">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="justify-end pt-4 card-actions">
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
