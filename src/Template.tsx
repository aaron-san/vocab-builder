import { ReactNode } from "react";
import Header from "./components/Header";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen bg-gradient-to-r from-slate-700 to-slate-600">
      <Header />
      {children}
    </main>
  );
};

export default Template;
