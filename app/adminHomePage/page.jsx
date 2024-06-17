"use client";
import { useEffect, useState } from "react";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";
import Image from "next/image";
import advertisment from "../../public/banner1 1.png";

export default function AdminHomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const modules = [
    {
      id: 1,
      modiuleName: "Module Progres",
      precentage: "90%",
    },
    {
      id: 2,
      modiuleName: "Assigment Progress",
      precentage: "90%",
    },
    {
      id: 3,
      modiuleName: "Attendance Progress",
      precentage: "90%",
    },
    {
      id: 4,
      modiuleName: "Course Progress",
      precentage: "90%",
    },
  ];

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus) {
      setIsLoggedIn(true);
    } else {
      window.location.href = "/adminLogin";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/adminLogin";
  };

  if (!isLoggedIn) return <p>Loading...</p>;
  return (
    <div className="flex items-start justify-between gap-7 bg-[#E8F1F2]">
      <AdminSideBar />

      <div className="lg:w-[80%] md:w-[80%] w-full p-2 h-[100vh] lg:h-full">
        <div className="flex items-center justify-between">
          <AdminMobileSideNavigation />
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className="mt-10 flex items-start justify-center gap-4 flex-col ">
          <h1 className="font-bold">DASHBOARD</h1>
          <h1 className="font-bold text-lg">Welcom Back , ADMIN !</h1>
        </div>

        <div className="flex items-center justify-center1 w-full mt-10">
          <Image src={advertisment} alt="" className="w-full h-[400px]" />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 place-items-center mt-24 p-2">
          {modules.map((e) => {
            return (
              <div
                key={e.id}
                className="flex items-center flex-row  justify-between lg:w-[100%] w-full bg-[#00173D] text-white text-lg h-[70px] rounded-xl pl-3 pr-3"
              >
                <p>{e.modiuleName}</p>
                <p>{e.precentage}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
