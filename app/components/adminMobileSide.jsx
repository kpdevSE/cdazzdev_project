"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Image from "next/image";
import homeImage from "../../public/homeiCon.png";
import coursesImage from "../../public/courses.png";
import studentsImage from "../../public/students.png";
import enrollmentImage from "../../public/assigmnts.png";
import profileImage from "../../public/profile 1.png";
import Link from "next/link";

export default function AdminMobileSideNavigation() {
  const [open, setOpen] = useState(false);

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
    <div className="lg:hidden md:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
        onClick={() => {
          setOpen(true);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>

      <Transition show={open}>
        <Dialog className="relative z-10 left-0" onClose={setOpen}>
          <TransitionChild
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto relative w-screen max-w-md bg-[#00173D]">
                    <TransitionChild
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4"></div>
                    </TransitionChild>
                    <div className="flex h-full flex-col overflow-y-scroll bg-[#00173D] py-6 shadow-xl">
                      <div className="px-4 sm:px-6 flex items-center justify-between">
                        <DialogTitle className="text-base font-semibold leading-6 text-white">
                          ADMIN PANEL
                        </DialogTitle>
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-8 flex items-center justify-center w-full gap-5">
                        <Image src={profileImage} alt="" />
                        <p className="text-white font-bold text-lg">Admin</p>
                      </div>
                      <div className="relative flex-1 px-4 sm:px-6 flex flex-col items-center justify-start gap-4 mt-12">
                        {navItems.map((e) => {
                          return (
                            <Link href={e.navLink} key={e.id}>
                              <div className="w-[200px] flex items-center justify-around rounded-xl bg-[#C2E8F8] p-2 hover:cursor-pointer">
                                <Image
                                  src={e.navImage}
                                  className="w-9"
                                  alt=""
                                />
                                <p>{e.navName}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
