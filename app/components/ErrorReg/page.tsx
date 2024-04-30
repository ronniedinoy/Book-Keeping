"use client";

import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-col bg-white md:mt-1 mt-32 p-10 pt-5 rounded-lg">
        <form
          onClick={() => {
            router.push("/components/FormReg");
          }}
          className="text-white flex flex-col gap-y-1 w-56 h-[300px] "
        >
          <label className="text-gray-400 text-sm">Username</label>
          <input className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-red-500 text-center text-sm" />
          <label className="text-gray-400 text-sm">Email</label>
          <input className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-red-500 text-center text-sm" />

          <label className="text-gray-400 text-sm">Password</label>
          <input className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-red-500 text-center text-sm" />

          <label className="text-gray-400 text-sm">Confirm Password</label>
          <input className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-red-500 text-center text-sm" />

          <div
            className="bg-red-500 duration-300 flex justify-center items-center hover:active:scale-95 hover:bg-gray-600 w-30 h-10 py-3 rounded-xl shadow-md shadow-red-500 text-center text-sm mt-5"
          >
            Try Again
          </div>
          <a className="text-red-500 text-center opacity-1">
            All fields are required
          </a>
        </form>
      </div>
     </div>
  );
};

export default page;
