import React from "react";
import Image from "next/image";
import massage1 from "@/public/massage1.jpeg";
import massage2 from "@/public/massage2.jpeg";
import haircut1 from "@/public/haircut1.jpeg";
import haircut2 from "@/public/haircut2.jpeg";
import manicure1 from "@/public/manicure1.jpeg";
import manicure2 from "@/public/manicure2.jpeg";
import pedicure1 from "@/public/pedicure1.jpeg";
import pedicure2 from "@/public/pedicure2.jpeg";

const page = () => {
  return (
    <div className="flex flex-col">
      <h1 className="md:text-center md:text-6xl ml-10 text-left text-2xl text-gray-500 mb-5">
        Service Offer
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 ml-10 mr-10 text-6xl text-pink-300 gap-5 text-center justify-evenly">
        <Image
          src={massage1}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={massage2}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={haircut1}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={haircut2}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={manicure1}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={manicure2}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={pedicure1}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
        <Image
          src={pedicure2}
          alt="spa2"
          className="flex rounded-xl hover:scale-95 hover:border-4 hover:border-pink-600 duration-200 w-96 h-52"
        />
      </div>
    </div>
  );
};

export default page;
