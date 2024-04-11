"use Client";
import Image from "next/image";
import spa5 from "../public/spa_image5.jpg";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-4xl text-[#57bdf8] font-[chilanka] text-center">
          OnGoing{" "}
          <span className="text-cyan-600 font-[purisa]">Application</span>
          <div className="md:flex items-center justify-center overflow-hidden">
            <Image src={spa5} alt="spa5" width={600} className="rounded-3xl flex m-auto hover:scale-95 duration-300 border-2 shadow-2xl shadow-black" />
          </div>
        </div>
      </div>
    </>
  );
}
