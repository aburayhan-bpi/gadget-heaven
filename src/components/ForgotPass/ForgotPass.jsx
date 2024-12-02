import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/ContextApi";

const ForgotPass = () => {
  const { passwordChange } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Validate if the entered email is valid
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid) {
      console.log("Password reset email sent to:", email);
      setErrorMessage(""); // Clear error message if valid
      passwordChange(email)
        .then(() => {
          Swal.fire({
            title: "Success!",
            text: `Reset email has been sent to ${email}!`,
            icon: "success",
            confirmButtonText: "Close",
          });
          setEmail("");
        })
        .catch(() => setErrorMessage("Something went wrong!"));
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Forgot Your Password?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Please enter your registered email address, and we’ll send you a
            link to reset your password.
          </p>
        </div>

        {/* Email Input Section */}
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium text-gray-700">
              Email Address
            </span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              const enteredEmail = e.target.value;
              setEmail(enteredEmail);
              setIsEmailValid(validateEmail(enteredEmail)); // Validate email as user types
              setErrorMessage(""); // Clear any error when the user starts typing
            }}
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4">
            <p>{errorMessage}</p>
          </div>
        )}

        {/* Send Email Button */}
        <div className="mt-6">
          <button
            className={`btn btn-primary w-full py-3 text-white text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
              !isEmailValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={!isEmailValid}
          >
            Send Reset Link
          </button>
        </div>

        {/* Back to Login Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Remembered your password?{" "}
            <a
              href="/login"
              className="text-primary font-semibold hover:underline"
            >
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
