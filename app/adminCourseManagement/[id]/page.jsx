"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminSideBar from "@/app/components/adminSideBar";
import AdminMobileSideNavigation from "@/app/components/adminMobileSide";
import { toast } from "react-toastify";

export default function AdminCoursesID() {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/v2/course/get-course/${id}`
      );
      console.log(result.data);
      setCourse(result.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const deletCourses = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v2/course/delete-course/${id}`
      );
      toast.success("Student deleted successfully");
      window.location.href = "/adminCourseManagement";
    } catch (err) {
      console.log("Something went wrong during deletion");
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start justify-between gap-7 lg:w-full md:w-full w-[90%] mx-auto">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <h1>Single Student Home Page</h1>
        <div className="w-full flex items-center justify-center flex-col gap-3 h-[80vh] ">
          <p>{course._id}</p>
          <p>{course.name}</p>
          <p>{course.description}</p>
          <p>{course.duration}</p>
          <button onClick={deletCourses}>Delete</button>
        </div>
      </div>
    </div>
  );
}
