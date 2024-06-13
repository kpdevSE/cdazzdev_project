import Link from "next/link";

export default function SignUp() {
  return (
    <div className="w-full h-[100vh] bg-[#E8F1F2] flex items-center justify-center">
      <div className="lg:w-[50%] md:w-[55%] w-[90%] bg-white lg:h-[60%] md:h-[70%] h-[80%] rounded-xl">
        <div className="flex items-center justify-center flex-col gap-5 p-5">
          <h2 className="text-3xl">Online Learning Platform</h2>
          <h3 className="text-2xl">Sign Up Your Account</h3>
          <div className="lg:w-[60%] w-[90%] flex items-center justify-center gap-3 flex-col mt-5">
            <div className="flex flex-col w-full gap-3">
              <label htmlFor="name" className="font-bold">
                UserName:-
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label htmlFor="email" className="font-bold">
                Email:-
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col w-full gap-3">
              <label htmlFor="password" className="font-bold">
                Password:-
              </label>
              <input
                type="password"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button className="w-full h-[50px] bg-[#00173D] text-white mt-4 rounded-lg">
              Sign In
            </button>
            <div className="flex items-start justify-start mt-10 gap-2 font-bold">
              <p>Don't have an Account?</p>
              <Link href={"/sigin"}>
                <p className="text-decoration-line underline font-bold">
                  Sign In
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
