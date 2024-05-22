import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-row items-center justify-between w-screen min-h-16 px-8 mb-20 bg-gray-800 opacity-80">
      <p className="text-2xl text-transparent text-blue-400 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text">
        <Link to="/" className="text-inherit">
          &copy; {year}
        </Link>
      </p>
      <ul className="flex justify-end w-40 gap-4 text-yellow-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
