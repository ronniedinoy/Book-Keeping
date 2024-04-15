"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="md:flex justify-between md:mt-5 mt-5">
        <div className="flex md:ml-5 ml-5 md:mt-0 mt-10 text-5xl">
          <Link href="#">
            <h1 className="fixed rounded-full text-gray-300">
              iCE
              <span className="text-pink-600 text-4xl font-[anton]">SPA</span>
            </h1>
          </Link>
        </div>

        <div className="sticky top-1 md:flex-col space-x-3 md:ml-5 ml-5 mr-10 mb-10 md:mt-10 mt-12 text-pink-300 font-[ubuntu]">
          <Link className="text-lg hover:text-pink-500 duration-300" href="/">
            Business
          </Link>

          <Link
            className="text-lg hover:text-pink-500 duration-300"
            href="/components/About"
          >
            About
          </Link>
          <Link
            className="text-lg hover:text-pink-500 duration-300"
            href="/components/Services"
          >
            Services
          </Link>
          <Link
            className="text-lg hover:text-pink-500 duration-300"
            href="/components/Contacts"
          >
            Contact
          </Link>

          <Link
            className="hover:bg-pink-500 duration-300 bg-pink-900 text-gray-200 px-3 py-1 rounded"
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
