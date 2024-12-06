import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

const Register = () => {
  const {
    createSignUpNewUsers,
    signInWithGoogle,
    updateUserProfile,
    setRefetch,
    user,
  } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [isTerms, setIsTerms] = useState("");
  const [signToggle, setSignToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const minLength = /.{6,}/;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;

  if (user) {
    return <Navigate to={location.state || "/"}></Navigate>;
  }
  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, photo, email, password);
    setPasswordError("");
    setIsTerms("");
    const validatePassword = (password) => {
      if (!minLength.test(password)) {
        return "Password should be at least 6 characters long";
      }
      if (!hasUpperCase.test(password)) {
        return "Uppercase letter include must to the password";
      }
      if (!hasLowerCase.test(password)) {
        return "Lowercase letter include must to the password";
      }
      return "";
    };
    const errorMessage = validatePassword(password);
    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }
    if (!terms) {
      setIsTerms("Check our terms and conditions");
      return;
    }
    createSignUpNewUsers(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        toast.success("Registration successful");
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setRefetch(Date.now());
        });
        console.log(result);
      })
      .catch(() => {
        toast.error("Email already in use");
      });
  };
  const handleToggleSignBtn = () => {
    setSignToggle(!signToggle);
  };
  const handleSignUpGoogle = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
        toast.success("Google Register successful");
      })
      .catch(() => {
        toast.error("Google Register failed please try again");
      });
  };
  return (
    <div>
      <div className="pb-16 pt-16 flex items-center justify-center flex-col ">
        <div className="relative bg-white dark:bg-gray-800/50 dark:text-gray-50 bg-opacity-80 shadow-md rounded-lg p-8 w-full max-w-xl z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl lg:text-3xl font-bold">Register Form</h1>
          </div>

          <form className="" onSubmit={handleRegisterForm}>
            <div className="pb-6">
              <label className="block text-sm font-medium ">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="pb-6">
              <label className="block text-sm font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="pb-6">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white  rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div className="pb-3 relative">
              <label className="block text-sm font-medium ">Password</label>
              <input
                type={signToggle ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
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
            </div>
            <span
              className={`font-bold text-xs text-red-500 ${
                passwordError ? "" : "hidden"
              }`}
            >
              {passwordError}
            </span>
            <div className="form-control ">
              <label className="cursor-pointer label  justify-start gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox  w-5 h-5 dark:text-white dark:bg-gray-500"
                />
                <p className="text-xs font-medium ">
                  You agree to the{" "}
                  <span className="text-indigo-600 text-sm underline">
                    Terms of Services
                  </span>{" "}
                  and{" "}
                  <span className="text-indigo-600 text-sm underline">
                    Privacy Policy
                  </span>
                </p>
              </label>
            </div>
            <span
              className={`font-bold text-xs text-red-500 ${
                isTerms ? "" : "hidden"
              }`}
            >
              {isTerms}
            </span>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-200 mt-7"
            >
              Register
            </button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4  text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={handleSignUpGoogle}
              className="flex-1 gap-3 flex items-center justify-center text-black py-2 px-4 rounded-full border border-indigo-600   transition duration-200 bg-white "
            >
              <FcGoogle className="text-2xl" />
              Register with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm">
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
