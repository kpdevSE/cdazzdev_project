"use client";
import Link from "next/link";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminStudentManagement() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/student/get-students"
        );
        setStudents(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex items-start justify-between gap-7">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <h1 className="text-xl mt-10 font-bold">Admin Student page Page</h1>

        <div className="w-full p-2 mt-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Available Students</h2>
            <Link href={"/adminAddStudents"}>
              <button className="w-[200px] h-[40px] bg-lime-950 rounded-lg text-white font-bold">
                Add Student
              </button>
            </Link>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((e) => {
                  return (
                    <tr
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                      key={e.id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <Link href={`/adminStudentsManagement/${e._id}`}>
                          {e.name}
                        </Link>
                      </th>

                      <td className="px-6 py-4">{e.email}</td>

                      <td className="px-6 py-4">{e.age}</td>
                      <td className="px-6 py-4">{e.course}</td>
                      <td className="px-6 py-4 flex items-center justify-start gap-2">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
