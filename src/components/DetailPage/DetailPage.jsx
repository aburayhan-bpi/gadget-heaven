import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AssetContext, AuthContext } from "../../Context/ContextApi";
import RatingStars from "../RatingStars/RatingStars";

// const { pathname } = useLocation();

const DetailPage = () => {
  const { user } = useContext(AuthContext);
  document.title = "Product Detail | GadgetHeaven";
  const { product_id: paramProductId } = useParams();
  const productId = parseFloat(paramProductId);
  const { setCartData, cartData, wishData, setWishData } =
    useContext(AssetContext);

  const products = useLoaderData();

  const { pathname } = useLocation();
  // console.log(location.pathname);

  const data = products.find((p) => p.product_id === productId);
  // console.log(data);

  const {
    availability,
    category,
    product_id,
    description,
    price,
    product_image,
    product_title,
    rating,
    specification,
  } = data;

  const handleAddToCart = () => {
    // setCartData(data);
    const ifExits = cartData.find(
      (item) => item.product_id === data.product_id
    );

    if (user) {
      if (!ifExits) {
        setCartData((prevCartData) => [...prevCartData, data]);
        toast.success("Successfully added to cart");
      } else {
        toast.error("Already added to cart");
        return;
      }
    } else {
      toast.error("Please login first.");
      return;
    }
  };

  // console.log(cartData);

  const [isDisable, setIsDisable] = useState(false);

  const handleWishlist = () => {
    // setCartData(data);
    const ifExits = wishData.find(
      (item) => item.product_id === data.product_id
    );
    if (user) {
      if (!ifExits) {
        setWishData((prevCartData) => [...prevCartData, data]);
        toast.success("Successfully added to wishlist");
        setIsDisable(true);
      } else {
        toast.error("Already added to wishlist");
        return;
      }
    } else {
      toast.error("Please login first.");
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="relative mb-[50rem] md:mb-[30rem] bg-violet-500">
        <div className="">
          <div className="text-center space-y-6 max-w-5xl mx-auto mt-1 pt-10 pb-60">
            <h1 className="text-white text-5xl font-bold leading-tight">
              Product Details
            </h1>
            <p className="text-white max-w-[53rem] mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex absolute inset-x-0 top-[13rem] px-4 justify-center items-center ">
          <div className="w-[70rem] h-fit rounded-xl border overflow-hidden p-5 bg-white">
            <div className="md:flex justify-center gap-6 rounded-xl">
              <div
                // style={{ width: "80%" }}
                className="flex items-center justify-center p-4 bg-gray-200 rounded-xl mb-6 md:mb-0"
              >
                <img className="" src={product_image} alt="" />
              </div>
              <div
                style={{ width: "100%" }}
                className="flex flex-col gap-3 rounded-xl"
              >
                <h2 className="font-bold text-3xl">{product_title}</h2>
                <p className="text-gray-600 text-lg font-semibold">
                  Price: $ {price}
                </p>
                <div className="border w-fit px-4 bg-green-100 text-green-600 rounded-xl">
                  {availability ? "In Stock" : "Stock Out"}
                </div>
                <p className="text-gray-600">{description}</p>
                <h2 className="font-bold text-lg">Specification:</h2>
                <div className="">
                  {specification.map((specs, index) => (
                    <div key={index} className="flex gap-3">
                      <span>{index + 1}.</span>
                      <p className="text-gray-600">{specs}</p>
                    </div>
                  ))}
                </div>
                <p className="font-bold text-lg">Rating:</p>
                <div className="flex gap-4 text-lg">
                  <div className="flex gap-2 items-center text-orange-400">
                    <RatingStars rating={rating}></RatingStars>
                  </div>
                </div>
                <div className="flex gap-4">
                  {/* Add To Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className="btn bg-violet-500 text-white rounded-full px-6 text-xl"
                  >
                    Add To Cart <i className="fa-solid fa-cart-shopping"></i>
                  </button>

                  {/* Add To Wishlist Button */}
                  <div
                    onClick={handleWishlist}
                    className={`btn bg-transparent rounded-full text-xl ${
                      isDisable ? "btn-disabled" : ""
                    }`}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
