import React from "react";

const Review = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-sm bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl mr-4">
      <img
        className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-md"
        src="assets/avatar.png"
        alt="Customer avatar"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-700">John Doe</h3>
      <span className="text-sm text-gray-500">Verified Customer</span>
      <p className="mt-4 text-gray-600 text-center px-6">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.”
      </p>
      <div className="flex space-x-1 mt-3">
        <span className="text-yellow-400 text-xl">&#9733;</span>
        <span className="text-yellow-400 text-xl">&#9733;</span>
        <span className="text-yellow-400 text-xl">&#9733;</span>
        <span className="text-yellow-400 text-xl">&#9733;</span>
        <span className="text-gray-300 text-xl">&#9733;</span>
      </div>
    </div>
  );
};

export default Review;
