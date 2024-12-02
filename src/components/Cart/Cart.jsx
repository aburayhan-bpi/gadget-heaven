// Cart.jsx
import React, { useContext, useEffect, useState } from "react";
import { AssetContext } from "../../Context/ContextApi";
import SingleCart from "../SingleCart/SingleCart";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartData, setCartData } = useContext(AssetContext);
  // console.log(cartData);

  const [totalPrice, setTotalPrice] = useState(0);
  const [isDisable, setIsDisable] = useState(false);
  const [modalPrice, setModalPrice] = useState(0);

  useEffect(() => {
    const totalProductPrice = cartData.reduce(
      (sum, item) => sum + item.price,
      0
    );
    setTotalPrice(totalProductPrice);
  }, [cartData]);

  cartData.map((card) => console.log(card));

  // Sorting
  const handleSort = () => {
    const sortedProducts = [...cartData].sort((a, b) => b.price - a.price);
    setCartData(sortedProducts);
    console.log("Sorted Products:", sortedProducts);
  };

  // Delete
  const handleDeleteProduct = (id) => {
    console.log("deleting products", id);
    const filteredProduct = cartData.filter(
      (product) => product.product_id !== id
    );
    setCartData(filteredProduct);
  };

  // Purchase in modal
  const handlePurchase = () => {
    setModalPrice(totalPrice);
    setTotalPrice(0);
    // console.log("purchase in progress...");
    document.getElementById("my_modal_5").showModal();
    setIsDisable(true);
    setCartData([]);
  };

  const handleModalClose = () => {
    setCartData([]);
    setTotalPrice(0);
    navigate("/");
    // console.log("close button clicked from the modal");
  };

  return (
    <div>
      {/* Buttons */}
      {/* {cartData.length > 0 && ( */}
      <div className="container w-11/12 mx-auto mt-10 xl:px-20">
        <div className="md:flex mt-4 md:mt-0 items-center justify-between">
          <p className="font-bold text-xl">Cart</p>

          <div className="md:flex mt-4 md:mt-0 items-center gap-6">
            <p className="font-bold text-xl mb-4 md:mb-0">
              Total Cost: ${totalPrice.toFixed(2)}
            </p>

            <div className="flex gap-4 items-center">
              <button
                onClick={handleSort}
                className={`${
                  cartData.length == 0
                    ? "btn-disabled text-gray-400"
                    : "flex items-center justify-center p-0.5  text-sm font-medium rounded-full bg-gradient-to-br from-purple-500 to-pink-500"
                }`}
              >
                <span
                  className={`bg-white ${
                    cartData.length === 0 ? "" : "text-violet-500"
                  } 
                  flex gap-2 text-base items-center justify-center px-5 py-2.5  rounded-full`}
                >
                  Sort by Price
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </span>
              </button>

              <button
                onClick={handlePurchase}
                type="button"
                className={`${
                  cartData.length === 0
                    ? "btn-disabled bg-gray-200 text-gray-400"
                    : "text-white bg-gradient-to-b from-purple-500 to-pink-500"
                }   font-medium rounded-full text-base px-8 py-2.5 text-center`}
              >
                Purchase
              </button>
              {/* modal start */}

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="flex flex-col justify-center items-center">
                    <img src="assets/Group.png" alt="success-mark" />
                    <h2 className="mt-6 -mb-2 font-bold text-xl">
                      Payment Successfull
                    </h2>
                    <div className="flex w-full flex-col">
                      <div className="divider"></div>
                    </div>
                    <div className="-mt-1 text-gray-500 text-center space-y-2">
                      <p>Thanks for purchasing.</p>
                      <p>Total: ${modalPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="modal-action">
                    <form method="dialog" className="w-full">
                      {/* if there is a button in form, it will close the modal */}

                      <button
                        onClick={handleModalClose}
                        className="btn mb-2 font-bold text-base w-full"
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
              {/* modal end */}
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      <div className="flex flex-col">
        {cartData.map((data) => (
          <SingleCart
            key={data.product_id}
            data={data}
            handleDeleteProduct={handleDeleteProduct}
          ></SingleCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;
