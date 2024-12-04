import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="pb-16 mt-16 flex items-center justify-center flex-col ">
        <div className="relative bg-white bg-opacity-80 border border-indigo-600 rounded-lg p-8 w-full max-w-2xl z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              🎥 Movie Portal
            </h1>
            <p className="text-gray-700 text-sm lg:text-base mt-2">
              Create an account to explore and manage your favorite movies!
            </p>
          </div>

          <form className="">
            <div className="pb-6">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="pb-6">
              <label className="block text-sm font-medium text-gray-700">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
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

            <div className="pb-3 relative">
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

            <div className="form-control ">
              <label className="cursor-pointer label  justify-start gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox  w-5 h-5"
                />
                <p className="text-xs font-medium ">
                  You agree to the{" "}
                  <span className="text-sky-500 text-sm underline">
                    Terms of Services
                  </span>{" "}
                  and{" "}
                  <span className="text-sky-500 text-sm underline">
                    Privacy Policy
                  </span>
                </p>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-200 mt-7"
            >
              Register
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
              Register with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
