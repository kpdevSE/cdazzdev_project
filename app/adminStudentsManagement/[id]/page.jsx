"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminSideBar from "@/app/components/adminSideBar";
import AdminMobileSideNavigation from "@/app/components/adminMobileSide";
import { toast } from "react-toastify";

export default function AdminStudentId() {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/v1/student/get-student/${id}`
      );
      console.log(result.data);
      setUser(result.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/v1/student/delete-student/${id}`
      );
      toast.success("Student deleted successfully");
      window.location.href = "/adminStudentsManagement";
    } catch (err) {
      console.log("Something went wrong during deletion");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-start justify-between gap-7">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <h1>Single Student Home Page</h1>
        <p>{user._id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.age}</p>
        <p>{user.course}</p>
        <button onClick={deleteUser}>Delete</button>
      </div>
    </div>
  );
}
