import { Link } from "react-router-dom";
import errorImg from "../../assets/depositphotos_52839753-stock-photo-error-illustration.jpg";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
        <div className="mt-10">
          <img
            src={errorImg}
            alt="Not Found Illustration"
            className="w-52 h-52 mx-auto rounded-full"
          />
        </div>
        <h1 className="text-9xl font-bold text-gray-600">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-lg mt-2 text-gray-500">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow-md transition duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
