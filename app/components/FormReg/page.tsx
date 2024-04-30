"use client";
"use strict";

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCaretDown, AiOutlineCaretRight } from "react-icons/ai";
import { noSSR } from "next/dynamic";
import { NextResponse } from "next/server";
import { request } from "http";
import error from "next/error";

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
  const router = useRouter();

  const [color, isColor] = useState("gray");

  const [isOpen, setisOpen] = useState(false);

  const [value, setValue] = useState("Male");

  const Gender = [
    {
      label: "M A N",
      value: "Male",
      icon: "",
    },
    {
      label: "W O M A N",
      value: "Female",
      icon: "",
    },
    {
      label: "B A Y O T",
      value: "Gay",
      icon: "",
    },
    {
      label: "T U M B O Y",
      value: "Lesbian",
      icon: "",
    },
  ];

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
    const isEqualPassword =
      formValue.password.length === formValue.confirm_password.length;
    const confirmPassword = formValue.password && formValue.confirm_password;

    if (isEqualPassword && inputUserEmail && confirmPassword) {
      registerForm({ preventDefault: () => {} });
    } else {
      router.push("/components/ErrorReg");
    }
  }

  const registerForm = (data: any) => {
    data.preventDefault();
    try {
      fetch("/API/signForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
        body: JSON.stringify(formValue),
      }) .then((data) => data.json())
      .then(() => {
        console.log("Data Existed");
        router.push("/components/ErrorReg/UserEmailTaken");
        return NextResponse.json({ messege: "Recorded" }, { status: 200 });
      })

      .catch((error) => {
        console.log("Data Recorded");
        router.push("/components/ConfirmReg");
        return NextResponse.json(
          { messege: "Recorded", error },
          { status: 201 }
        );
      });

    } catch (error) {
      console.log("Unreachable DataBase", data, formValue);
      return Response.json({ message: "Error", error }, { status: 500 });
    }
  };

  function handleSelect(event: any) {
    setValue(event.target.value);
  }

  return (
    <div>
      <div className="flex flex-col bg-white md:mt-1 mt-32 p-10 pt-5 rounded-lg">
        <form
          name="sign-up"
          method="POST"
          autoComplete="off"
          className="text-white flex flex-col gap-y-1 w-56 h-[300px] "
        >
          <label className="text-gray-400 text-sm">Username</label>
          <input
            type="text"
            name="username"
            value={formValue.username}
            required
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-black text-center text-sm"
          />
          <label className="text-gray-400 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            required
            autoComplete="off"
            onChange={handleInputChange}
            className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-black text-center text-sm"
          />

          <label className="text-gray-400 text-sm">Password</label>
          <input
            type="password"
            name="password"
            value={formValue.password}
            autoComplete="off"
            required
            onChange={handleInputChange}
            className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-black text-center text-sm"
          />

          <label className="text-gray-400 text-sm">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            value={formValue.confirm_password}
            autoComplete="off"
            required
            onChange={handleInputChange}
            className="bg-white/10 text-gray-500 duration-300 hover:scale-105 hover:bg-gray-300 w-60 h-10 m-auto p-2 rounded-xl shadow-md shadow-black text-center text-sm"
          />

          {/* <div>
          <div
            onClick={() => setisOpen((prev) => !prev)}
            className="bg-white/5 flex justify-evenly items-center duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-gray-400 text-justify text-sm"
          >
            <div className="text-pink-400">Gender</div>
            {!isOpen ? <AiOutlineCaretRight /> : <AiOutlineCaretDown />}
            {formValue.sex}
          </div>
          {isOpen && (
            <div>
              {Gender.map((gender, key) => (
                <div className="hover:active:scale-95">
                  <h1
                    onClick={() =>
                      (formValue.sex = gender.value) && setisOpen(false)
                    }
                    className="bg-gray-800 hover:bg-gray-700 hover:border-l-2 hover:border-r-2 flex justify-evenly items-center duration-100 w-60 h-6 my-1 m-auto p-3 rounded-xl shadow-md shadow-black text-white text-justify text-sm"
                  >
                    {gender.value}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div> */}

          {/* <div>
          <select
            onChange={handleSelect}
            className="bg-white/5 duration-300 hover:scale-105 hover:bg-pink-600 w-60 max-h-80 m-auto p-3 rounded-xl shadow-md shadow-black text-white text-center text-sm"
          >
            Male / Female
            {sex.map((sexMF) => (
              <option
                value={sexMF.value}
                className="text-gray-700 bg-blue-500 text-sm"
              >
                {sexMF.label}
              </option>
            ))}
          </select>
          <p className="opacity-0">{(formValue.sex = value)}</p>
        </div> */}

          {/* <div
            style={{ color }}
            onClick={() => {
              (formValue.sex = "Male"), isColor("black");
            }}
            className={`duration-300 hover:cursor-cell hover:bg-pink-600 hover:scale-105 w-28 h-10 px-1 py-3 text-center rounded-xl shadow-md shadow-black text-sm`}
          >
            Male
          </div>
          <div
            style={{ color }}
            onClick={() => {
              (formValue.sex = "Female"), isColor("yellow");
            }}
            className={`duration-300 hover:cursor-cell hover:bg-pink-600 hover:scale-105 w-28 h-10 px-1 py-3 text-center rounded-xl shadow-md shadow-black text-sm`}
          >
            Female
          </div> */}

          <button
            id="sign"
            type="submit"
            onClick={(e) => validateForm(e)}
            className="bg-[#49998B] duration-300 flex justify-center items-center hover:active:scale-95 hover:bg-[#03583f] w-30 h-10 py-3 rounded-xl shadow-md shadow-black text-center text-sm mt-5"
          >
            Register
          </button>
          <a className="text-red-500 text-center opacity-0">
            All fields are required
          </a>
        </form>
      </div>
      <div className="text-sm text-white text-center mt-3">
        Already have an account?Login{" "}
        <a href="/components/FormLogin" className="text-blue-800">
          here
        </a>
      </div>
    </div>
  );
};

export default page;
