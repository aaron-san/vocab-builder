import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 opacity-80 w-screen h-12 flex flex-row justify-between items-center px-4 mb-20">
      <p className="text-blue-400 text-2xl bg-gradient-to-r from-blue-300 to-green-300 text-transparent bg-clip-text">
        Vocab Builder
      </p>
      <ul className="flex w-40 gap-4 justify-end text-yellow-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
