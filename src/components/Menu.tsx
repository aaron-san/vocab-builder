import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

interface ISetMenuOpen {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}
const Menu = ({ setMenuOpen }: ISetMenuOpen) => {
  return (
    <motion.section
      className="w-[30vw] h-screen flex flex-col gap-4 text-2xl absolute left-0 top-0 z-10 bg-slate-100 text-slate-800 border shadow-md justify-start items-center pt-12"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "30vw" }}
      //   transition={{ ease: "easeIn" }}
    >
      <button
        className="absolute top-5 right-5"
        onClick={() => setMenuOpen(false)}
      >
        <IoMdClose />
      </button>
      <p className="text-transparent text-blue-400 bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text mb-4">
        <Link
          to="/"
          className="text-inherit tracking text-3xl cabin-100"
          onClick={() => setMenuOpen(false)}
        >
          Vocab Sensei
        </Link>
      </p>
      <ul className="list-none w-full flex flex-col items-center gap-2">
        <Link to="/practice">
          <li
            className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
            onClick={() => setMenuOpen(false)}
          >
            Practice
          </li>
        </Link>
        <Link to="/mycards">
          <li
            className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
            onClick={() => setMenuOpen(false)}
          >
            My Cards
          </li>
        </Link>
        <Link to="/dictionary">
          <li
            className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
            onClick={() => setMenuOpen(false)}
          >
            <p>Dictionary</p>
          </li>
        </Link>
      </ul>
    </motion.section>
  );
};

export default Menu;
