import Image from "next/image";
export const Banner = (): React.ReactElement => (
  <div className="w-full h-[311px] lg:h-[643px] relative">
    {/* Banner in mobile */}
    <Image
      src="/banner.jpeg"
      alt="Banner of Pulsatilla"
      width={1200}
      height={620}
      className="block lg:hidden object-position-[52%_66%] object-none h-full"
    />
    {/* Banner in desktop */}
    <Image src="/banner.jpeg" alt="Banner of Pulsatilla" fill />
    <h1 className="text-white text-4xl font-bold absolute top-[29%] right-[11%] w-[40%] text-right whitespace-normal lg:whitespace-nowrap lg:top-[72%] lg:right-[9%] ">
      白頭翁 (Chinese bulbul)
    </h1>
    <h3 className="text-white text-lg absolute bottom-[10%] right-[6%] w-[90%] font-[800] lg:bottom-[15%] lg:right-[-19%]">
      又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
    </h3>
    {/* color overlay for better text display */}
    <div
      className="w-full h-full absolute bg-black top-0 right-0"
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(129,129,129,0) 20%)",
      }}
    />
  </div>
);
