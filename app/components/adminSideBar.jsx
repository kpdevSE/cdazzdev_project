import Image from "next/image";
import homeImage from "../../public/homeiCon.png";
import coursesImage from "../../public/courses.png";
import studentsImage from "../../public/students.png";
import enrollmentImage from "../../public/assigmnts.png";
import profileImage from "../../public/profile 1.png";
import Link from "next/link";

export default function AdminSideBar() {
  const navItems = [
    {
      id: 1,
      navName: "Home",
      navImage: homeImage,
      navLink: "/adminHomePage",
    },
    {
      id: 2,
      navName: "Courses",
      navImage: coursesImage,
      navLink: "/adminCourseManagement",
    },
    {
      id: 3,
      navName: "Students",
      navImage: studentsImage,
      navLink: "/adminStudentsManagement",
    },
    {
      id: 4,
      navName: "Enrollments",
      navImage: enrollmentImage,
      navLink: "/adminEnrollementsManagement",
    },
  ];

  return (
    <div className="lg:w-[20%] md:w-[30%] left-0 h-[100vh] bg-[#00173D] lg:flex flex-col items-center justify-start p-2 hidden md:flex">
      <h1 className="text-white mt-10 text-xl font-bold">ADMIN PANEL</h1>
      <div className="mt-8 flex items-center justify-around w-[200px]">
        <Image src={profileImage} alt />
        <p className="text-white font-bold text-lg">Admin</p>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-8 mt-20">
        {navItems.map((e) => {
          return (
            <Link key={e.id} href={e.navLink}>
              <div className="w-[200px] flex items-center justify-around rounded-xl bg-[#C2E8F8] p-2 hover:cursor-pointer">
                <Image src={e.navImage} className="w-9" alt />
                <p>{e.navName}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
