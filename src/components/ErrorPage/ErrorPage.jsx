import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div class="grid h-screen place-content-center bg-white px-4">
        <div class="text-center">
          <h1 class="text-9xl font-black text-gray-200">404</h1>

          <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 text-gray-500">We can't find that page.</p>

          <button
            onClick={handleGoBack}
            class="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
