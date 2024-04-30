"use client";

import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <form
      onClick={() => {
        router.push("/components/FormLogin");
      }}
      className="md:mt-1 sm:w-[350px] md:w-[350px] w-[300px] sm:h-[350px] md:h-[350px] h-[350px] mt-36 border rounded-[10px] text-[#767676] bg-[#FFFFFF]"
    >
      <label className="flex flex-col mt-16 ">
        <div className="sm:ml-8 md:ml-12 ml-6">Email</div>
        <div className="border-2 border-red-500 rounded-[10px] h-[40px] w-[250px] mx-auto text-justify p-3" />
      </label>

      <label className="flex flex-col mt-5 ">
        <div className="sm:ml-8 md:ml-12 ml-6">Password</div>
        <div className="border-2 border-red-500 rounded-[10px] h-[40px] w-[250px] mx-auto text-justify p-3" />
      </label>

      <div className="text-white mt-10 mx-auto bg-[#49998B] rounded-[10px] flex justify-center items-center w-[150px] h-[40px] duration-100 hover:active:scale-95 hover:active:bg-cyan-400 hover:active:text-gray-500 cursor-pointer">
        <div>Try Again</div>
      </div>
      <div className="text-red-500 text-center mt-3">Record not Exist</div>
    </form>
  );
};

export default page;
