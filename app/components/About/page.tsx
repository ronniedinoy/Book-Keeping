import React from "react";
import Image from "next/image";
import spa2 from "@/public/spa_image1.jpg";

const page = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="mx-10">
          <Image
            src={spa2}
            alt="spa2"
            width={600}
            className="shadow-2xl shadow-black rounded-3xl"
          />
        </div>

        <div>
          <h1 className="text-6xl md:text-left text-center ml-5 md:mt-10 mt-10 mb-5">
            About Us</h1>

          <div className="text-center text-gray-500 text-sm flex flex-col gap-5 font-[purisa] mx-10">
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                alias culpa ut repellendus architecto dignissimos dicta delectus
                tempore corrupti. Doloremque porro quod voluptatum cumque
                laboriosam consequuntur quae maiores similique reiciendis.
              </span>
            </div>
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                vitae dolor veritatis et quia ea necessitatibus nisi. Nam harum,
                eaque est commodi sequi distinctio sunt incidunt aliquid porro
                dolores odit qui, reprehenderit, velit labore hic consequatur
                atque eius blanditiis tenetur? Sapiente maxime similique qui
                nihil quibusdam quae harum porro sed tempore optio neque
                cupiditate tempora, sint voluptate aliquid ex nostrum modi fuga
                id.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
