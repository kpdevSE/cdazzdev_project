"use client";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminUsername = "admin";
    const adminPassword = "adminpassword";

    if (username !== adminUsername) {
      toast.error("User name is wrong !", {
        position: "top-right",
      });
    } else {
      toast.error("password is wrong !", {
        position: "top-right",
      });
    }

    if (username === adminUsername && password === adminPassword) {
      localStorage.setItem("isLoggedIn", true);
      window.location.href = "/adminHomePage";
    } else {
      toast.error("User Credentails wrong !", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="w-full h-[100vh] bg-[#E8F1F2] flex items-center justify-center">
      <div className=" bg-white lg:h-[60%] md:h-[70%] h-[80%] rounded-xl lg:w-[50%] md:w-[55%] w-[90%]">
        <div className="flex items-center justify-center flex-col gap-5 p-5">
          <h2 className="text-3xl">Online Learning Platform</h2>
          <h3 className="text-2xl">Admin Login(Only for ADMINS)</h3>
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-full flex items-center justify-center"
          >
            <div className="lg:w-[60%] w-[90%] flex items-center justify-center gap-3 flex-col mt-10">
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="email" className="font-bold">
                  User Name:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="password" className="font-bold">
                  Password:-
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                className="w-full h-[50px] bg-[#00173D] text-white mt-4 rounded-lg font-bold"
                type="submit"
              >
                LOGIN IN
              </button>
            </div>
          </form>
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
