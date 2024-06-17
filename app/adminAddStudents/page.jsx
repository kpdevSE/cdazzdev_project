"use client";
import { useState } from "react";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Link from "next/link";
import { errorToJSON } from "next/dist/server/render";

export default function AdminAddStudents() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState("");

  const formData = {
    name,
    email,
    age,
    course,
    address,
    studentId,
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/student/save",
        formData
      );
      if (response.status === 200) {
        window.location.reload;
        toast.success("Adding Success");
        window.location.href = "/adminstudentsManagement";
      } else {
        toast.error("Failed to add student");
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="flex items-start justify-between gap-7 bg-[#E8F1F2]">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full ">
        <AdminMobileSideNavigation />
        <div className="flex items-center justify-between p-3">
          <h1 className="text-xl font-bold">Admin add Students Page</h1>
          <Link href={"/adminStudentsManagement"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0L9 3M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
          </Link>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <form action="" onSubmit={handleSubmit} className="w-full">
            <div className="lg:w-[60%] w-[90%] flex items-center justify-center gap-3 flex-col mt-5">
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="name" className="font-bold">
                  Student Name:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="email" className="font-bold">
                  Student Email:-
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Student Age:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Student Id:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Student Address:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Student Course:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <button
                className="w-full h-[50px] bg-[#00173D] text-white mt-4 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
