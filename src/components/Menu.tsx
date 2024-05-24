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
      className="w-[30vw] h-screen flex flex-col gap-4 text-2xl absolute left-0 top-0 z-10 bg-slate-100 text-slate-800 border shadow-md justify-center items-center"
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
      <h1 className="mb-12">Vocab Sensei</h1>
      <ul className="list-none w-full flex flex-col items-center gap-1">
        <li
          className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/practice">Practice</Link>
        </li>
        <li
          className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/mycards">My Cards</Link>
        </li>
        <li
          className="border shadow-md w-80 py-4 rounded-md text-center hover:bg-slate-200"
          onClick={() => setMenuOpen(false)}
        >
          <Link to="/dictionary">Dictionary</Link>
        </li>
      </ul>
    </motion.section>
  );
};

export default Menu;
