import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "./providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/ContextApi";
import toast from "react-hot-toast";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const { loginUser, loginWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setSuccessMsg("");
    setErrorMsg("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        // setSuccessMsg("Login Succesfully.");
        toast.success("Login successfully.");
        e.target.reset();
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to home
          console.log("Navigating to home...");
        }, 500);
        // navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMsg("Please provide valid credentials.");
      });
  };

  const handleSignInWithGoogle = () => {
    console.log("google sign in...");
    loginWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Login successfully.");
        // Optional: Add a delay to allow state updates if necessary
        setTimeout(() => {
          navigate("/dashboard"); // Redirect to home
          console.log("Navigating to home...");
        }, 500); // Add a short delay to allow authentication state to sync, if needed
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="px-4">
      <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl text-center mb-4">Login</h2>
          {/* <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="name"
                placeholder="Name"
                required
              />
            </label>
          </div> */}
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow"
                name="email"
                placeholder="Email"
                required
              />
            </label>
          </div>
          <div className="form-control relative">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type={showPass ? "text" : "password"}
                className="grow"
                name="password"
                placeholder="Password"
              />
            </label>
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </div>
            <Link to='/forgotpassword'>
              <label className="label">
                <p className="label-text-alt link link-hover">
                  Forgot password?
                </p>
              </label>
            </Link>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="py-1">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
          {successMsg && (
            <p className="text-green-500 text-base">{successMsg}</p>
          )}
          {errorMsg && <p className="text-red-500 text-base">{errorMsg}</p>}

          {/* sign in with google button */}

          <button
            onClick={handleSignInWithGoogle}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
