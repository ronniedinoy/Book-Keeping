"use client";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="flex mx-5 my-5 px-5 text-5xl">
          <Link href="#">
            <h1 className="rounded-full text-gray-300">
              iCE<span className="text-pink-600 text-4xl font-[anton]">SPA</span>
            </h1>
          </Link>
        </div>

        <div className="flex-col space-x-3 sm:ml-36 ml-10 mr-10 mb-10 text-pink-300 font-[ubuntu]">
          <Link
            className="text-lg hover:scale-125 hover:text-pink-500 duration-300"
            href="/"
          >
            Business
          </Link>

          <Link
            className="text-lg md:hover:scale-125 hover:text-pink-500 duration-300"
            href="/components/About"
          >
            About
          </Link>
          <Link
            className="text-lg hover:scale-125 hover:text-pink-500 duration-300"
            href="/components/Services"
          >
            Services
          </Link>

          <Link
            className="text-lg hover:scale-125 hover:text-pink-500 duration-300"
            href="/components/Contacts"
          >
            Contact
          </Link>

          <Link
            className="scale-[75%] hover:bg-pink-600 hover:scale-[85%] duration-300 bg-pink-500 text-gray-200 px-3 py-1 rounded"
            href="/components/FormLogin"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
