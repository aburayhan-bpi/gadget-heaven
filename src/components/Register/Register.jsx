import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ContextApi";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const { createUser, createUserGoogle, signOutUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newUser = { name, photo, email };
    console.log(newUser);
    // Basic validation
    if (!name || !email || !password || !photo) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number."
      );
      return;
    }
    // Create user
    createUser(email, password)
      .then(() => {
        toast.success("Account created successfully.");
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        });

        // send user data to db

        axios.post("http://localhost:5000/api/v1/user", newUser).then((res) => {
          toast.success("sent to db");
        });

        signOutUser(); // Sign out after registration
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleRegister = (e) => {
    e.preventDefault(); // Prevent form submission when Google button is clicked

    createUserGoogle()
      .then((result) => {
        const user = result.user;
        console.log("Google user registered:", user);
        toast.success("Account created successfully with Google.");

        const googleUser = {
          name: user?.displayName,
          photo: user?.photoURL,
          email: user?.email,
        };

        // sent user data to db
        axios
          .post("http://localhost:5000/api/v1/user", googleUser)
          .then((res) => {
            toast.success("sent google user to db");
          });

        navigate("/"); // Navigate to the desired page after registration
      })
      .catch((error) => {
        console.error("Google registration error:", error.message);
        setError("Failed to register with Google. Try again.");
      });
  };

  return (
    <div className="px-4">
      <div className="card bg-base-100 w-full mx-auto mt-14 max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-3xl text-center mb-4">Register</h2>

          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="name"
                placeholder="Name"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="photo"
                placeholder="Photo URL"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
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
              <input
                type={showPass ? "text" : "password"}
                className="grow"
                name="password"
                placeholder="Password"
                required
              />
            </label>
            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              {showPass ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>

          <p className="text-gray-500 mt-2">
            Already have an account? <Link to="/login">Login here</Link>
          </p>

          {/* Google Register Button */}
          <button
            type="button" // Ensures it's not treated as a form submit button
            onClick={handleGoogleRegister}
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

export default Register;
