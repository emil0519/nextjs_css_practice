export const Hamburger = ({
  isOpen,
}: {
  isOpen: boolean;
}): React.ReactElement => (
  <button className="flex flex-col justify-between h-6 w-6 z-3">
    <div
      className={`h-1 w-full bg-black transition-all duration-200 ${isOpen && "transform translate-y-3 rotate-45"}`}
    ></div>
    <div
      className={`h-1 w-2/3 bg-black transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
    ></div>
    <div
      className={`h-1 w-full bg-black transition-all duration-200 ${isOpen && "transform -translate-y-2 -rotate-45"}`}
    ></div>
  </button>
);
