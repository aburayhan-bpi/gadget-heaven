import React from "react";

const SingleCart = ({ data, handleDeleteProduct }) => {
  // console.log(data);
  const { product_id, product_image, product_title, price, description } = data;

  return (
    <div className="container w-11/12 mx-auto mt-10 xl:px-20">
      <div className="flex  justify-between border rounded-xl p-4 bg-white border-none">
        <div className="flex gap-3">
          <div className="h-32 w-48 flex items-center justify-center p-4 bg-gray-200 rounded-lg overflow-hidden">
            <img
              className="rounded-lg"
              src={product_image}
              alt={product_title}
            />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="font-bold text-lg">{product_title}</h3>
            <p>{description}</p>
            <h3 className="font-bold text-lg">${price}</h3>
          </div>
        </div>
        <div className="gap-4 md:flex-row flex-col-reverse lg:me-20">
          <button onClick={() => handleDeleteProduct(product_id)}>
            <i className="fa-regular fa-circle-xmark text-red-500 text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
