import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    // mb-[30rem]
    <div className="relative mb-14 md:mb-[17rem] lg:mb-[13rem]">
      <div className="px-5 bg-violet-500 container w-11/12 mx-auto rounded-t-none rounded-xl -mt-4 h-[47rem]">
        <div className="text-center space-y-6 max-w-5xl mx-auto mt-1 pt-10 pb-60">
          <h1 className="text-white text-5xl mt-5 md:mt-0 font-bold leading-tight">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white p-8 md:p-0 px-4 max-w-[53rem] mx-auto">
            Explore top-tier laptops, mobiles, and accessories at Gadget Heaven.
            Whether you're upgrading your device or looking for the perfect
            accessory, we offer products that blend innovation, performance, and
            style.
          </p>
          <Link to="/dashboard">
            <button className="btn mt-4">Shop Now</button>
          </Link>
        </div>
      </div>
      {/* top-[22rem] */}
      <div className=" hidden md:flex absolute inset-x-0 top-[26rem] lg:top-[22rem] justify-center">
        {/* w-[65rem] h-[34rem] */}
        <div className="w-[80%] xl:w-[65rem] h-[34rem] rounded-xl border overflow-hidden p-6">
          <img
            className="w-full h-full rounded-xl"
            src="assets/banner.jpg"
            alt="banner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
