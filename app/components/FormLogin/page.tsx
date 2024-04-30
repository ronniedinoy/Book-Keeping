"use client";
"use strict";

import React from "react";
import { ChangeEvent, useState } from "react";
import { NextResponse } from "next/server";
import { useRouter } from "next/navigation";

interface data {
  id?: string;
  username: string;
  firstname: string;
  lastname: string;
  middlename: string;
  sex: string;
  contact: string;
  birthdate: string;
  address: string;
  email: string;
  password: string;
}

const Initial: data = {
  username: "",
  firstname: "",
  lastname: "",
  middlename: "",
  sex: "",
  contact: "",
  birthdate: new Date().toISOString().split("T")[0],
  address: "",
  email: "",
  password: "",
};

const page = () => {
  const [formValue, setFormValue] = useState(Initial);
  const [Logins, setLogins] = useState([]);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const LoginUserEmail = (data: any) => {
    try {
      fetch("/API/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
      })
        .then((data) => data.json())
        .then(() => {
          console.log("Existed");
          router.push("/components/ConfirmLogin");
          return NextResponse.json({ messege: "Existed" }, { status: 200 });
        })
        .catch((error) => {
          console.log("Not Found");
          router.push("/components/ErrorLogin/NoRecord");
          return NextResponse.json(
            { messege: "Not Found", error },
            { status: 404 }
          );
        });
    } catch (error) {
      console.log("Error Found");
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  };

  function validateLogin() {
    const validUserPassword =
      formValue.username.length && formValue.password.length;
    const validEmailPassword =
      formValue.email.length && formValue.password.length;

    const isNotEmpty = validUserPassword || validEmailPassword;

    if (isNotEmpty) {
      LoginUserEmail(formValue);
    } else {
      router.push("/components/ErrorLogin");
    }
  }

  return (
    <>
      <form className="md:mt-1 sm:w-[350px] md:w-[350px] w-[300px] sm:h-[350px] md:h-[350px] h-[350px] mt-36 border rounded-[10px] text-[#767676] bg-[#FFFFFF]">
        <label className="flex flex-col mt-16 ">
          <div className="sm:ml-8 md:ml-12 ml-6">Email</div>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={formValue.username || formValue.email}
            onChange={handleInputChange}
            className="border-2 border-gray-200 rounded-[10px] h-[40px] w-[250px] mx-auto text-justify p-3"
          />
        </label>

        <label className="flex flex-col mt-5 ">
          <div className="sm:ml-8 md:ml-12 ml-6">Password</div>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={formValue.password}
            onChange={handleInputChange}
            className="border-2 border-gray-200 rounded-[10px] h-[40px] w-[250px] mx-auto text-justify p-3"
          />
        </label>

        <div
          onClick={() => validateLogin()}
          className="text-white mt-10 mx-auto bg-[#49998B] rounded-[10px] flex justify-center items-center w-[150px] h-[40px] duration-100 hover:active:scale-95 hover:active:bg-cyan-400 hover:active:text-gray-500 cursor-pointer"
        >
          <div>Login</div>
        </div>

        <h1 className="mt-16 text-center text-white">
          No account yet? Register{" "}
          <a
            className="text-blue-900 cursor-pointer"
            href="/components/FormReg"
          >
            here
          </a>
        </h1>
      </form>

      {/* 
      <div className="bg-pink-900/50 md:mt-10 mt-28 scale-[99%] hover:scale-[100%] duration-300 rounded-xl text-4xl text-white h-96 flex flex-col justify-center items-center">
        <h1 className=" flex justify-center items-center animate-pulse p-5">
          LOGIN
        </h1>
        <div className="h-96 w-80 flex items-center justify-center">
          <form className="flex flex-col">
            <input
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Username or Email"
              value={formValue.username || formValue.email}
              onChange={handleInputChange}
              className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto mb-5 p-3 rounded-xl shadow-md shadow-black text-center text-sm"
            />

            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              value={formValue.password}
              onChange={handleInputChange}
              className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto mb-5 p-3 rounded-xl shadow-md shadow-black text-center text-sm"
            />
            <div
              onClick={() => validateLogin()}
              className="rounded-lg duration-200 bg-pink-600 hover:bg-pink-800 hover:active:scale-95 shadow-md hover:shadow-white shadow-black hover:cursor-pointer w-60 mt-10 p-2 text-lg flex justify-center"
            >
              SUBMIT
            </div>

            <div>
              <Link
                href="/components/FormReg"
                className="w-20 text-lg duration-300 text-gray-500 hover:text-gray-300  hover:active:scale-95 flex justify-right mt-2"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default page;
