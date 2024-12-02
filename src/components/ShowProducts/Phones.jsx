import React, { useEffect, useState } from "react";
import ViewProducts from "../ViewProducts/ViewProducts";
import { useLoaderData } from "react-router-dom";

const Phones = () => {
  // const [product, setProduct] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // useEffect(() => {
  //   fetch("/productData.json")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);
const product = useLoaderData()
  const filteredData = product.filter((p) => p.category === "Phones");

  // useEffect(() => {
  //   setFilteredData(filteredP);
  // }, [product]);

  return (
    <div>
      <ViewProducts product={filteredData} />
    </div>
  );
};

export default Phones;
