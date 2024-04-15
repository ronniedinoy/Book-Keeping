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
      <div className="grid md:grid-cols-4 grid-cols-2 mx-10 text-6xl gap-3">
        <Image
          src={massage1}
          alt="massage1"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"
        />
        <Image
          src={massage2}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={haircut1}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={haircut2}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={manicure1}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={manicure2}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={pedicure1}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
        <Image
          src={pedicure2}
          alt="spa2"
          className="rounded-xl md:scale-100 hover:scale-95 duration-200 w-96 h-52 shadow-md hover:shadow-white"        />
      </div>
    </div>
  );
};

export default page;
