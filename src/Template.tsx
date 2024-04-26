import React, { ReactNode } from "react";
import Header from "./components/Header";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen">
      <Header />
      {children}
    </main>
  );
};

export default Template;
