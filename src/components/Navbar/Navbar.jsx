import React, { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ContextApi, {
  AssetContext,
  AuthContext,
} from "../../Context/ContextApi";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartData, wishData } = useContext(AssetContext);
  const { signOutUser, user } = useContext(AuthContext);
  // console.log(wishData.length);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
    </>
  );

  const handleSignOutUser = () => {
    if (user) {
      signOutUser();
      toast.success("Sign out successfully!");
    } else {
      toast.error("Please login first.");
    }
  };

  return (
    <div
      className={
        pathname === "/"
          ? `navbar md:px-20 bg-transparent py-4 rounded-xl lg:text-white`
          : `navbar md:px-20 bg-transparent  py-4 rounded-xl text-black`
      }
    >
      <div className="navbar-start">
        <div className="dropdown -ml-6 md:-ml-20 pl-2">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-3"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <button className="btn btn-ghost text-xl w-60 h-auto">
            <img src="./assets/logo.png" alt="" />
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <Link to="/dashboard">
          <div className="relative btn rounded-full">
            {cartData.length !== 0 && (
              <div className="absolute text-xs -top-2 -right-4 bg-red-500 text-white badge">
                {/* {cartData?.length} */}
                {user ? cartData.length : 0}
              </div>
            )}
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Link>
        <Link to="/dashboard">
          <div className="relative btn rounded-full">
            {wishData.length !== 0 && (
              <div className="absolute text-xs -top-2 -right-4 bg-red-500 text-white badge">
                {/* {wishData?.length} */}
                {user ? wishData?.length : 0}
              </div>
            )}
            <i className="fa-regular fa-heart"></i>
          </div>
        </Link>
        <div>
          {user && (
            <button
              onClick={handleSignOutUser}
              className="btn border-none text-white md:-mr-16  bg-green-400"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
