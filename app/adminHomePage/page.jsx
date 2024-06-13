"use client";
import { useEffect, useState } from "react";
import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";

export default function AdminHomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <div className="flex items-start justify-between gap-7">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <button onClick={handleLogout}>Logout</button>
        <h1>Admin Home Page</h1>
      </div>
    </div>
  );
}
