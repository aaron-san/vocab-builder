import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 opacity-80 w-screen h-12 flex flex-row justify-between items-center px-4">
      <span>Vocab Builder</span>
      <ul className="flex w-40 gap-4 justify-end">
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
