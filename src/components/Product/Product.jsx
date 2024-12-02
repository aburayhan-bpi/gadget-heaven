import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const navigate = useNavigate();

  const handleProductDetail = (id) => {
    navigate(`/details/${id}`);
    // console.log("detail button clicked");
  };

  const {
    availability,
    category,
    description,
    price,
    product_id,
    product_image,
    product_title,
    rating,
    specification,
  } = product;

  return (
    <div className="p-4 bg-white rounded-xl">
      {/* <h2>product page</h2> */}
      <figure className="bg-gray-200 rounded-xl p-4 flex justify-center items-center">
        <img className="h-[180px]" src={product_image} alt={product_title} />
      </figure>
      <div className="text-left">
        <h2 className="mt-4 text-lg font-bold">{product_title}</h2>
        <p className="mt-2 font-semibold text-gray-500">Price: ${price}</p>
        <div>
          <button
            onClick={() => handleProductDetail(product_id)}
            className="btn mt-3 px-6 btn-outline btn-primary rounded-full"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
