"use client";
import { useState } from "react";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";

interface PropsType {
  title: string;
  navItems: string[];
}

export const Header = ({ title, navItems }: PropsType): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`${isOpen ? "max-h-[500px]" : "max-h-[40px]"} bg-white border-b border-solid shadow-md w-full transition-max-height duration-700 ease-in-out`}
    >
      <div className="flex justify-between mt-6 mx-8 pb-4">
        <div onClick={() => setIsOpen((prevState) => !prevState)}>
          <Hamburger isOpen={isOpen} />
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <Logo />
      </div>
      <div
        className={`flex flex-col my-4 gap-3 transition-all duration-200 ease-in ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {navItems.map((nav) => (
          <div className="flex justify-center items-center cursor-pointer text-lg hover:text-[#AA6666]">
            <span className="hover:border-b-2 hover:border-b-solid hover:border-b-[#AA6666]">
              {nav}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};
