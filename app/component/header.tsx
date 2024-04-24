"use client";
import { useState } from "react";
import { Hamburger } from "./hamburger";
import { Logo } from "./logo";
import { NavItemListType } from "../type";

interface PropsType {
  title: string;
  navItemList: NavItemListType[];
}

export const Header = ({
  title,
  navItemList,
}: PropsType): React.ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className={`${isOpen ? "max-h-[500px]" : "max-h-[70px]"} bg-white border-b border-solid shadow-lg w-full transition-max-height duration-700 ease-in-out lg:shadow-none lg:border-none lg:flex-1/3`}
    >
      <div className="block lg:flex lg:justify-center lg:flex-col lg:items-center lg:relative">
        <div className="flex justify-between mt-6 mx-8 pb-4 lg:mt-[100px] static">
          <div onClick={() => setIsOpen((prevState) => !prevState)}>
            <Hamburger isOpen={isOpen} />
          </div>
          <h1 className="text-xl font-bold">{title}</h1>
          <Logo />
        </div>
        <div
          className={`flex flex-col my-4 gap-3 transition-all duration-200 ease-in ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"}`}
        >
          {navItemList.map((nav) => (
            <div
              className="flex justify-center items-center cursor-pointer text-lg hover:text-[#AA6666]"
              key={nav.text}
            >
              <a
                href={nav.anchor}
                onClick={() => setIsOpen(false)}
                className="hover:border-b-2 hover:border-b-solid hover:border-b-[#AA6666]"
              >
                {nav.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
