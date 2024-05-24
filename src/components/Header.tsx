import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { IMenu } from "../types/types";

const Header = ({ setMenuOpen }: IMenu) => {
  return (
    <header className="flex flex-row items-center justify-between w-screen min-h-16 px-8 bg-gray-800 opacity-80">
      <div className="flex justify-start gap-4 items-center">
        <p className="text-2xl text-transparent text-blue-400 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text">
          <Link to="/" className="text-inherit">
            Vocab Sensei
          </Link>
        </p>
        <button
          className="text-white text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <CiMenuFries />
        </button>
      </div>
      <ul className="flex justify-end w-40 gap-4 text-yellow-200">
        <li>
          <Link to="/study">Study!</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/support">Support</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
