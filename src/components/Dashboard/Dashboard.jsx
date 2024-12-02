import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  document.title = "Dashboard | GadgetHeaven";
  const [isActive, setIsActive] = useState("Cart");

  const handleActiveBtn = (btnText) => {
    setIsActive(btnText);
  };

  return (
    <div>
      <div className="bg-violet-500 text-center space-y-6 mx-auto mt-1 py-10">
        <h1 className="text-white text-5xl font-bold leading-tight">
          Dashboard
        </h1>
        <p className="text-white max-w-[53rem] mx-auto">
          Here, you can easily manage your cart and wishlist, keeping track of
          all your favorite gadgets and products. Review your selections, remove
          items, and proceed with your purchases - all from a single, convenient
          location. Enjoy a personalized shopping experience as you explore and
          manage the items you've added to your cart or saved for later in your
          wishlist.
        </p>
        <div className="flex gap-6 justify-center">
          <button
            onClick={() => handleActiveBtn("Cart")}
            className={`btn bg-transparent px-14 rounded-full ${
              isActive === "Cart"
                ? "bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleActiveBtn("Wishlist")}
            className={`btn bg-transparent px-14 rounded-full ${
              isActive === "Cart"
                ? "bg-transparent text-white"
                : "bg-white text-black"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {isActive === "Cart" ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default Dashboard;
