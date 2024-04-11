import React from "react";
import Image from "next/image";
import spa2 from "@/public/spa_image1.jpg";

const page = () => {
  return (
    <>
      <div className="md:flex items-center justify-center mx-2 mb-10">
        <Image src={spa2} alt="spa2" width={600} className="border-2 shadow-2xl shadow-black rounded-3xl animate-pulse bg-black/80"/>
        <div>
          <h1 className="md:flex relative md:ml-20 mt-10 text-6xl text-center text-gray-500">
            About Us
          </h1>
          <span className="md:flex text-base text-center font-[chilanka] text-gray-400 ml-20 mr-20 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias
            culpa ut repellendus architecto dignissimos dicta delectus tempore
            corrupti. Doloremque porro quod voluptatum cumque laboriosam
            consequuntur quae maiores similique reiciendis.
          </span>
          <br />
          <span className="md:flex text-base text-center font-[chilanka] text-gray-400 ml-20 mr-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            vitae dolor veritatis et quia ea necessitatibus nisi. Nam harum,
            eaque est commodi sequi distinctio sunt incidunt aliquid porro
            dolores odit qui, reprehenderit, velit labore hic consequatur atque
            eius blanditiis tenetur? Sapiente maxime similique qui nihil
            quibusdam quae harum porro sed tempore optio neque cupiditate
            tempora, sint voluptate aliquid ex nostrum modi fuga id.
          </span>
        </div>
      </div>
    </>
  );
};

export default page;
