import React from "react";
import Image from "next/image";
import spa2 from "@/public/spa_image1.jpg";

const page = () => {
  return (
    <>
      <form className="md:w-svw w-svw h-96 overflow-auto mt-8">
        <div className="grid md:grid-cols-2 grid-cols-1 md:mt-1 mt-10">
          <div className="mx-10">
            <Image
              src={spa2}
              alt="spa2"
              width={600}
              className="shadow-2xl shadow-black rounded-3xl"
            />
          </div>

          <div>
            <h1 className="md:text-6xl text-3xl text-white/80 md:text-left text-left ml-5 sm:mt-10 md:mt-2 mt-6 mb-3">
              About Us
            </h1>

            <div className="md:text-justify text-justify text-gray-900 text-sm flex flex-col gap-5 font-[chilanka] mx-10">
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  alias culpa ut repellendus architecto dignissimos dicta
                  delectus tempore corrupti. Doloremque porro quod voluptatum
                  cumque laboriosam consequuntur quae maiores similique
                  reiciendis.
                </span>
              </div>
              <div>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum vitae dolor veritatis et quia ea necessitatibus nisi.
                  Nam harum, eaque est commodi sequi distinctio sunt incidunt
                  aliquid porro dolores odit qui, reprehenderit, velit labore
                  hic consequatur atque eius blanditiis tenetur? Sapiente maxime
                  similique qui nihil quibusdam quae harum porro sed tempore
                  optio neque cupiditate tempora, sint voluptate aliquid ex
                  nostrum modi fuga id.
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default page;
