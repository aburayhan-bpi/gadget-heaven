import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 ">
      <HashLoader />
    </div>
  );
};

export default Loading;
