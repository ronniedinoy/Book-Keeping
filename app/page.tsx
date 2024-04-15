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
          <div className="md:flex mx-5 items-center justify-center">
            <Image src={spa5} alt="spa5" width={600} className="shadow-2xl shadow-black rounded-3xl bg-black/80" />
          </div>
        </div>
      </div>
    </>
  );
}
