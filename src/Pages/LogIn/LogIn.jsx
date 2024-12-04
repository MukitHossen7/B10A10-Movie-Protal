// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="pb-16 mt-16 flex items-center justify-center flex-col">
      <div className="relative bg-white bg-opacity-80 border border-indigo-600 rounded-lg p-8 w-full max-w-xl z-10 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            🎥 Movie Portal
          </h1>
          <p className="text-gray-600 text-sm lg:text-base mt-2">
            Log in to explore, watch, and manage your favorite movies!
          </p>
        </div>

        <form className="">
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="pb-1 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex items-center justify-between pb-6">
            <div>
              <Link
                to="/forget"
                className="text-xs text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="flex-1 gap-3 flex items-center justify-center text-black py-2 px-4 rounded-full border border-indigo-600   transition duration-200 bg-white">
            <FcGoogle className="text-2xl" />
            Login with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-700">
          Dont have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
