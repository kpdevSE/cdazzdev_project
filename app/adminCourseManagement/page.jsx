import AdminMobileSideNavigation from "../components/adminMobileSide";
import AdminSideBar from "../components/adminSideBar";

export default function AdminCourseManagement() {
  return (
    <div className="flex items-start justify-between gap-7">
      <AdminSideBar />
      <div className="lg:w-[80%] md:w-[80%] w-full">
        <AdminMobileSideNavigation />
        <h1>Admin Course Management Page</h1>
      </div>
    </div>
  );
}
