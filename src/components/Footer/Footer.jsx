import React from "react";

const Footer = () => {
  return (
    <footer className=" mt-52 bg-white justify-center gap-40 text-black-content p-10">
      <div className="text-center w-10/12 mx-auto">
        <h2 className="flex justify-center mb-3">
          <img className="w-72 h-auto" src="./assets/logo.png" alt="" />
        </h2>
        <p className="text-gray-600 text-lg">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="flex max-w-7xl mx-auto flex-col py-5">
        <div className="divider"></div>
      </div>
      <div className="footer flex justify-between max-w-3xl mx-auto">
        <nav>
          <h6 className="font-bold text-lg text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
