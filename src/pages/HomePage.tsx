import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="pt-20 pb-12">
      <div className="absolute left-40 top-36 rotate-6 w-[400px]">
        <img src="./dist/kanji-card.jpg" alt="Kanji card" />
      </div>
      <div className="w-[500px] ml-[50%]">
        <h1 className="text-6xl pb-2 mb-4">Learn English today!</h1>
        <h2 className="text-2xl">
          Use the best flashcard study tools available!
        </h2>
        <p className="text-xl">
          Create your own card set or choose a category and study today!
        </p>
        <Link to="/practice">
          <button className="bg-green-200 rounded-md shadow-md px-4 py-2 text-2xl mt-4 hover:bg-green-100">
            Start Now!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
