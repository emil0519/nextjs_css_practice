export const Logo = () => {
  return (
    <div
      className="size-8 rounded-full shadow-[0_1px_3px_#6C7A89]  flex 
    items-center justify-center z-[2] bg-white static lg:absolute lg:size-16 lg:top-[6%] lg:left-[92%]"
    >
      <div className="relative size-5 rotate-[-1deg] lg:size-8">
        {/* black section */}
        <div className="w-full h-[92%] bg-black rounded-tl-3xl rounded-tr-2xl rounded-br-2xl"></div>
        {/* center white section */}
        <div
          className="absolute w-full h-[53%] bottom-[5px] bg-white rounded-tl-[7px]
        rounded-tr-[2px] rounded-br-[5px] lg:h-[60%] lg:bottom-[19%]
        "
        />
        {/* eye */}
        <div className="rounded-full bg-black size-[20%] top-[36%] right-[21%] absolute" />
        {/* peak */}
        <div className="bg-black w-[20%] h-[12%] absolute top-[30%] right-[-10%] rounded-tr-[10px] rotate-[-8deg] lg:top-[36%]" />
      </div>
    </div>
  );
};
