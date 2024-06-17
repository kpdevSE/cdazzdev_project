"use client";
import { useState, useEffect } from "react";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";
import Link from "next/link";
import axios from "axios";

export default function AdminCourseManagement() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v2/course/get-courses"
        );
        setCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex items-start justify-between gap-7 bg-[#E8F1F2]">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full p-2 ">
        <div className="flex items-center justify-between">
          <AdminMobileSideNavigation />
        </div>

        <div className="mt-10 flex items-start justify-center gap-4 flex-col h-full">
          <h1 className="font-bold">ADMIN Course Management</h1>
          <h1 className="font-bold text-lg">Welcom Back , ADMIN !</h1>
        </div>
        <div className="flex lg:items-center lg:justify-between mt-6 lg:flex-row md:flex-row flex-col items-start justify-start gap-7 lg:gap-0">
          <h2 className="font-bold">Available Courses</h2>
          <Link href={"/adminAddCourses"}>
            <button className="w-[200px] h-[40px] bg-lime-950 rounded-lg text-white font-bold">
              Add Courses
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 mt-8">
          {courses.map((e) => {
            return (
              <div
                className="card e-full  w-full bg-base-100 shadow-xl"
                key={e.id}
              >
                <div className="card-body">
                  <div className="flex items-center justify-between ">
                    <p className="text-lg font-bold">Course Name :</p>
                    <h2 className="card-title">{e.name}</h2>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-lg font-bold">Course Duration :</p>
                    <p className="tesxt-lg font-bold">{e.duration}Months</p>
                  </div>
                  <div className="card-actions justify-end w-full">
                    <Link href={`/adminCourseManagement/${e._id}`}>
                      <button className="btn btn-primary">Full Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
