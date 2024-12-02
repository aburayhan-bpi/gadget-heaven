import React, { useState } from "react";
import Product from "../Product/Product";

const DisplayProduct = ({ products }) => {
  console.log(products);
  return (
    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 rounded-xl w-full">



        
      {/* {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))
      ) : (
        <p className="text-center text-2xl font-bold text-violet-800">
          Not Available
        </p>
      )} */}
    </div>
  );
};

export default DisplayProduct;
