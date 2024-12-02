import React from "react";
import Product from "../Product/Product";

const ViewProducts = ({product}) => {
    // const product = [{}]
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 rounded-xl w-full">
        {product?.length > 0 ? (
          product?.map((product) => (
            <Product key={product.product_id} product={product}></Product>
          ))
        ) : (
          <p className="text-center text-2xl font-bold text-violet-800">
            Not Available
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewProducts;
