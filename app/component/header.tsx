"use client";
import { useState } from "react";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";

export const Header = (): React.ReactElement => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <nav className="bg-white h-16 border-b border-solid shadow-md w-full">
      <div className="flex justify-between mt-6 mx-8">
        <div onClick={() => setIsopen((prevState) => !prevState)}>
          <Hamburger isOpen={isOpen} />
        </div>
        <h1 className="text-2xl font-bold">白頭翁不吃小米</h1>
        <Logo />
      </div>
    </nav>
  );
};
