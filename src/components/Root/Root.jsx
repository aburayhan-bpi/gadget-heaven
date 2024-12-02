import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const Root = () => {
  const { pathname } = useLocation();
  // console.log(location.pathname);
  // const { pathname } = useLocation();
  const categories = [
    "laptops",
    "phones",
    "accessories",
    "smart-watches",
    "macbook",
    "iphone",
  ];

  const getBackgroundClass = () => {
    if (pathname === "/register" || pathname === "/login") {
      return "bg-green-100"; // Background color for register and login pages
    }
    return pathname === "/" || categories.includes(pathname.split("/")[1])
      ? "bg-transparent"
      : "";
  };

  return (
    <div className={getBackgroundClass()}>
      <Toaster></Toaster>
      <div className="pt-4 container w-11/12 mx-auto">
        <div
          className={
            pathname == "/" || categories.includes(pathname.split("/")[1])
              ? `bg-violet-500 rounded-xl container mx-auto`
              : undefined
          }
        >
          <Navbar></Navbar>
        </div>
      </div>

      <div className="min-h-[calc(100vh-288px)] w-full mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
