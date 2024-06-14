"use client";
import { toast } from "react-toastify";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";
import { useState } from "react";
import axios from "axios";

export default function AdminAddCourses() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const formData = {
    name,
    price,
    duration,
    description,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("http://localhost:5000/api/v2/course/save", formData)
        .then(() => {
          toast.success("Student added succcesssfully");
          window.location.href = "/adminStudentsManagement";
          console.log("User added successfully:", response.data);
        })
        .catch(() => {
          toast.error("error");
        });
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="flex items-start justify-between gap-7">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <h1>Admin add Courses Page</h1>
        <div>
          <form action="" onSubmit={handleSubmit} className="w-full">
            <div className="lg:w-[60%] w-[90%] flex items-center justify-center gap-3 flex-col mt-5">
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="name" className="font-bold">
                  Course Name:-
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
                <label htmlFor="text" className="font-bold">
                  Course Price:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Description of Courses:-
                </label>
                <textarea
                  type="text"
                  name=""
                  id=""
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="bg-gray-50 border border-graysetCourse-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-3">
                <label htmlFor="text" className="font-bold">
                  Course Duration:-
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
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
