"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Link
      className="border px-5 py-2 text-4xl bg-red-900 rounded-2xl text-white hover:scale-125 duration-300"
      href="/components/FormReg"
    >
      Data Exist!
    </Link>
  );
};

export default page;
