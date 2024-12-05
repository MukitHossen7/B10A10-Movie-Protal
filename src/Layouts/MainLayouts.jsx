import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Scroll from "../components/Scroll/Scroll";
const MainLayouts = () => {
  return (
    <div>
      <Scroll></Scroll>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto min-h-[calc(100vh-366px)]">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
