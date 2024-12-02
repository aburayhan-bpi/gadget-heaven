import React, { useContext, useEffect, useState } from "react";
import ViewProducts from "../ViewProducts/ViewProducts";
import { useLoaderData } from "react-router-dom";
import { AssetContext } from "../../Context/ContextApi";

const AllProducts = () => {
  // const [product, setProduct] = useState([]);
  // const [product, setProduct] = useContext(AssetContext);

  // useEffect(() => {
  //   fetch("/productData.json")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);
  const product = useLoaderData();
  return (
    <div>
      <ViewProducts product={product} />
    </div>
  );
};

export default AllProducts;
