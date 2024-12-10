import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AssetContext, AuthContext } from "../../Context/ContextApi";
import toast from "react-hot-toast";

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartData, wishData } = useContext(AssetContext);
  const { signOutUser, user } = useContext(AuthContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSignOutUser = () => {
    if (user) {
      signOutUser();
      toast.success("Sign out successfully!");
    } else {
      toast.error("Please login first.");
    }
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const isAdmin = user?.email === "aburayhan.bpi@gmail.com"; // Replace with actual admin email/condition

  const navbarBgClass =
    pathname === "/admin-dashboard"
      ? "bg-blue-500 text-white"
      : pathname === "/"
      ? "bg-transparent lg:text-white"
      : "bg-transparent text-black";

  const dropdownTextColor =
    pathname === "/admin-dashboard" ? "text-black" : "text-gray-700";

  return (
    <div className={`navbar md:px-20 py-4 rounded-xl ${navbarBgClass}`}>
      <div className="navbar-start">
        <Link to="/">
          <button className="btn btn-ghost text-xl w-60 h-auto">
            <img src="./assets/logo.png" alt="Logo" />
          </button>
        </Link>
      </div>

      {/* Hidden links in large devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">Statistics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <Link to="/dashboard">
          <div className="relative btn rounded-full">
            {cartData.length !== 0 && (
              <div className="absolute text-xs -top-2 -right-4 bg-red-500 text-white badge">
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
                {user ? wishData?.length : 0}
              </div>
            )}
            <i className="fa-regular fa-heart"></i>
          </div>
        </Link>

        {/* Dropdown */}
        {user && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleDropdownToggle}
              className="btn btn-ghost p-0 rounded-full"
            >
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <ul className="menu p-2">
                  <li className={`lg:hidden ${dropdownTextColor}`}>
                    <NavLink to="/" onClick={() => setDropdownOpen(false)}>
                      Home
                    </NavLink>
                  </li>
                  <li className={`lg:hidden ${dropdownTextColor}`}>
                    <NavLink
                      to="/statistics"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Statistics
                    </NavLink>
                  </li>
                  <li className={`lg:hidden ${dropdownTextColor}`}>
                    <NavLink
                      to="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className={`lg:hidden ${dropdownTextColor}`}>
                    <NavLink
                      to="/contact"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Contact
                    </NavLink>
                  </li>
                  {!user && (
                    <>
                      <li className={`lg:hidden ${dropdownTextColor}`}>
                        <NavLink
                          to="/register"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Register
                        </NavLink>
                      </li>
                      <li className={`lg:hidden ${dropdownTextColor}`}>
                        <NavLink
                          to="/login"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Login
                        </NavLink>
                      </li>
                    </>
                  )}
                  {isAdmin && (
                    <li className={dropdownTextColor}>
                      <NavLink
                        to="/admin-dashboard"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Admin Dashboard
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink
                      to="/profile"
                      onClick={() => {
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-black hover:bg-gray-200 rounded-lg"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleSignOutUser();
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-red-500 hover:bg-gray-200 rounded-lg"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
