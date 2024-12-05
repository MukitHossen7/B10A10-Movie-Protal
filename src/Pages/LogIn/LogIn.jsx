// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const [signToggle, setSignToggle] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { signInExistingUsers, signInWithGoogle, user } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  if (user) {
    return <Navigate to={location.state || "/"}></Navigate>;
  }
  const handleLoginForm = (data) => {
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    signInExistingUsers(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Invalid Credential Email/Password");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  const handleLoginGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Google Login successful");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Login failed please try again");
      });
  };
  return (
    <div className="pb-16 pt-16 flex items-center justify-center flex-col">
      <div className="relative bg-white  bg-opacity-80 shadow-md rounded-lg p-8 w-full max-w-xl z-10 ">
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
            Login Form
          </h1>
        </div>

        <form className="" onSubmit={handleSubmit(handleLoginForm)}>
          <div className="pb-6">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="pb-1 relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={signToggle ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <button
              type="button"
              className="absolute -top-3"
              onClick={handleToggleSignBtn}
            >
              {" "}
              {signToggle ? (
                <FaEyeSlash className="absolute right-2 top-12 text-xl" />
              ) : (
                <IoEyeSharp className="absolute right-2 top-12 text-xl" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
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
          <button
            onClick={handleLoginGoogle}
            className="flex-1 gap-3 flex items-center justify-center text-black py-2 px-4 rounded-full border border-indigo-600   transition duration-200 bg-white"
          >
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
