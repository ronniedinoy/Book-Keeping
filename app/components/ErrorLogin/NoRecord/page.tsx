"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <Link
    className="border px-5 py-2 text-4xl bg-orange-700 rounded-2xl text-white hover:scale-125 duration-300"
    href="/components/FormLogin"
  >
Record Not Exist
  </Link>
  );
};

export default page;
