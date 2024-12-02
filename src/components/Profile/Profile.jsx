import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/ContextApi";
import toast from "react-hot-toast";
import { getAuth, sendEmailVerification, updateEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const {
    user,
    updateUserPassword,
    deleteUserAccount,
    updateUserEmail,
    emailVerification,
    signOutUser,
  } = useContext(AuthContext);

  // State for user information
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("");
  const [billingInfo, setBillingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    paymentMethod: "", // Stores selected payment method
    paymentDetails: "", // Stores payment details based on method
  });

  // Load billing information from localStorage when the component mounts
  useEffect(() => {
    const storedBillingInfo = localStorage.getItem("billingInfo");
    if (storedBillingInfo) {
      setBillingInfo(JSON.parse(storedBillingInfo));
    }
  }, []);
  // console.log(billingInfo.state);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleBillingChange = (e) =>
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });

  const handlePaymentMethodChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      paymentMethod: e.target.value,
      paymentDetails: "",
    });
  };

  // need to fix this
  const handleUpdateEmail = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Check if user is logged in
    //   if (user) {
    //     // Update email
    //     updateEmail(user, email)
    //       .then(() => {
    //         // Send email verification after updating the email address
    //         sendEmailVerification(user)
    //           .then(() => {
    //             toast.success(
    //               "A verification email has been sent to your new email."
    //             );
    //           })
    //           .catch((error) => {
    //             console.error(
    //               "Error sending verification email: ",
    //               error.message
    //             );
    //             toast.error("Error sending verification email.");
    //           });
    //       })
    //       .catch((error) => {
    //         console.error("Error updating email: ", error.message);
    //         toast.error("Error updating email: " + error.message);
    //       });
    //   } else {
    //     toast.error("User not logged in.");
    //   }
  };

  // send user a verification link or email
  const handleEmailVerify = () => {
    emailVerification()
      .then(() => {
        toast.success(`Verification email has been sent to ${user?.email}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdatePassword = () => {
    updateUserPassword(password)
      .then(() => {
        // console.log("password reset done...");
        toast.success("Password changed!");
        signOutUser();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdateBilling = () => {
    localStorage.setItem("billingInfo", JSON.stringify(billingInfo));
    toast.success("Billing information updated!");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteAccount = () => {
    deleteUserAccount()
      .then(() => {
        toast.success("Account deleted successfully.");
        setIsModalOpen(false);
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
        setIsModalOpen(false);
      });
  };
  // console.log(user);
  // console.log(user?.emailVerified);


  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-8">
      <div className="card w-full max-w-2xl bg-white shadow-xl rounded-lg p-6">
        <div className="flex flex-col items-center">
          {/* Profile Section */}
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              {user?.photoURL ? (
                <img
                  src={
                    user?.photoURL ||
                    "https://cdn-icons-png.flaticon.com/512/219/219986.png"
                  }
                  alt="User Profile"
                  onError={(e) =>
                    (e.target.src =
                      "https://cdn-icons-png.flaticon.com/512/219/219986.png")
                  }
                />
              ) : (
                "N/A"
              )}
            </div>
            <div className="absolute -right-20">
              {user && user?.emailVerified ? (
                <div className="badge badge-success gap-2 text-white">
                  Verified
                </div>
              ) : (
                <div className="badge badge-warning gap-2 text-white">
                  Not Verified
                </div>
              )}
            </div>
          </div>

          <h2 className="mt-4 text-2xl font-semibold">{user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <div className="mt-6">
          {/* Update Email Section */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              onChange={handleEmailChange}
              className="input input-bordered w-full"
              placeholder="Enter new email"
              defaultValue={user?.email}
              disabled
            />
            <button
              onClick={handleEmailVerify}
              className="btn btn-primary mt-2"
            >
              {user?.emailVerified ? "Verified" : "Verify Email"}
            </button>
          </div>

          {/* Update Password Section */}
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">New Password</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="input input-bordered w-full"
              placeholder="Enter new password"
            />
            <button
              onClick={handleUpdatePassword}
              className="btn btn-secondary mt-2"
            >
              Update Password
            </button>
          </div>

          {/* Billing Information Section */}
          <h3 className="text-lg font-medium mb-4">Billing Information</h3>

          {/* Payment Method Section */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Select Payment Method</span>
            </label>
            <select
              name="paymentMethod"
              value={billingInfo.paymentMethod}
              onChange={handlePaymentMethodChange}
              className="input input-bordered w-full"
            >
              <option value="">Select a payment method</option>
              <option value="bKash">bKash</option>
              <option value="Nagad">Nagad</option>
              <option value="Rocket">Rocket</option>
              <option value="CreditCard">Credit Card</option>
            </select>
          </div>

          {/* Payment Details Section */}
          {billingInfo.paymentMethod && (
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">
                  {billingInfo.paymentMethod === "CreditCard"
                    ? "Card Number"
                    : `${billingInfo.paymentMethod} Number`}
                </span>
              </label>
              <input
                type="text"
                name="paymentDetails"
                value={billingInfo.paymentDetails}
                onChange={handleBillingChange}
                className="input input-bordered w-full"
                placeholder={
                  billingInfo.paymentMethod === "CreditCard"
                    ? "Enter card number"
                    : "Enter phone number"
                }
              />
            </div>
          )}

          {/* Address and Other Billing Information */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={billingInfo.fullName}
              onChange={handleBillingChange}
              className="input input-bordered w-full"
              placeholder={user.displayName}
              disabled
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              className="input input-bordered w-full"
              placeholder="Enter your address"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">City</span>
              </label>
              <input
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleBillingChange}
                className="input input-bordered w-full"
                placeholder="City"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">State</span>
              </label>
              <input
                type="text"
                name="state"
                value={billingInfo.state}
                onChange={handleBillingChange}
                className="input input-bordered w-full"
                placeholder="State"
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Postal Code</span>
            </label>
            <input
              type="text"
              name="postalCode"
              value={billingInfo.postalCode}
              onChange={handleBillingChange}
              className="input input-bordered w-full"
              placeholder="Postal Code"
            />
          </div>

          <button
            onClick={handleUpdateBilling}
            className="btn btn-accent w-full mt-4"
          >
            Update Billing Information
          </button>

          {/* Account Deletion Button */}
          <button onClick={openModal} className="btn btn-error w-full mt-6">
            Delete Account
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-semibold mb-4">
              Confirm Account Deletion
            </h3>
            <p className="mb-4">
              Are you sure you want to delete your account? This action cannot
              be undone.
            </p>
            <div className="flex justify-between">
              <button onClick={closeModal} className="btn btn-secondary">
                Cancel
              </button>
              <button onClick={handleDeleteAccount} className="btn btn-error">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
