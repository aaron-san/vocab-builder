import { useState, ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const Template = ({ children }: { children: ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-gradient-to-r from-slate-700 to-slate-600">
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {children}
      <Footer />
    </main>
  );
};

export default Template;
