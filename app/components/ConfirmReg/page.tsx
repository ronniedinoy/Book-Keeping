"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Link
      className="border px-5 py-2 text-4xl bg-green-500 rounded-2xl text-white hover:scale-125 duration-300"
      href="/components/FormLogin"
    >
      Registration Success
    </Link>
  );
};

export default page;
