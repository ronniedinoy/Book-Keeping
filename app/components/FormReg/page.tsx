"use client";
"use strict";

import React, { use, useEffect } from "react";
import { ChangeEvent, useState } from "react";
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
  confirm_password: string;
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
  confirm_password: "",
};

const page = () => {
  const [formValue, setFormValue] = useState(Initial);
  const [isValidForm, setIsValidForm] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  function validateForm(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    const inputUserEmail = formValue.username && formValue.email;
    const isEqualPassword = formValue.password === formValue.confirm_password;

    if (isEqualPassword && inputUserEmail) {
      registerForm({ preventDefault: () => {} });
    } else {
      router.push("/components/ErrorReg");
    }
  }

  const registerForm = (data: any) => {
    try {
      data.preventDefault();
      fetch("/API/signForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((data) => data.json())
        .then(() => {
          // router.push("/components/ConfirmReg/RecordExist");
        });
    } catch (error) {
      router.push("/components/ErrorReg");
      return Response.json({ message: "Error", error }, { status: 500 });
    }
  };

  return (
    <div className="flex flex-col bg-pink-900/50 p-10 pt-5 rounded">
      <h1 id="register" className="text-3xl text-pink-500 text-justify mb-5">
        Registration
      </h1>
      <form
        name="sign-up"
        method="post"
        autoComplete="off"
        className="text-white flex flex-col gap-y-3"
      >
        <input
          type="text"
          name="username"
          value={formValue.username}
          placeholder="Choose a Username"
          required
          autoComplete="off"
          onChange={handleInputChange}
          className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-center text-sm"
        />

        <input
          type="email"
          name="email"
          value={formValue.email}
          placeholder="Active Email Please"
          required
          autoComplete="off"
          onChange={handleInputChange}
          className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-center text-sm"
        />

        <input
          type="password"
          name="password"
          value={formValue.password}
          autoComplete="off"
          required
          placeholder="Your Password"
          onChange={handleInputChange}
          className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-center text-sm"
        />

        <input
          type="password"
          name="confirm_password"
          value={formValue.confirm_password}
          autoComplete="off"
          required
          placeholder="Confirm Password"
          onChange={handleInputChange}
          className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-center text-sm"
        />

        <div className="bg-white/5 flex justify-center duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80  p-3 rounded-xl shadow-md shadow-black text-sm gap-10">
          <div>
            <input type="radio" name="sex" value={(formValue.sex = "male")} />
            <span>Male</span>

            <input type="radio" name="sex" value={(formValue.sex = "Female")} />
            <span>Female</span>
          </div>
        </div>

        <button
          type="submit"
          onClick={(e) => validateForm(e)}
          className="bg-pink-900/50 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 py-3 mt-2 rounded-xl shadow-md shadow-black text-center text-sm"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default page;
