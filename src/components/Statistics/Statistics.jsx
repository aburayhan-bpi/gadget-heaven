import React, { useContext, useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import { AssetContext } from "../../Context/ContextApi";

const Statistics = () => {
  // const { cartData } = useContext(AssetContext);
  // console.log(cartData);
  // const [toalPrice, setTotalPrice] = useState(0);
  const [allProduct, setAllProduct] = useState([]);
  document.title = "Statistics | GadgetHeaven";

  const chartData = allProduct.map((item) => ({
    ...item,
    Available: item.availability ? "In Stock" : "Stock Out",
    Price: item.price,
    Rating: item.rating,
    Category: item.category,
  }));

  // const pPrice = allProduct.reduce((sum, item) => sum + item.price, 0);
  // setTotalPrice(pPrice);

  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  return (
    <div>
      {/* o */}
      <div className="bg-violet-500 text-center space-y-6 mx-auto mt-1 py-10">
        <h1 className="text-white text-5xl font-bold leading-tight">
          Statistics
        </h1>
        <p className="text-white max-w-[53rem] mx-auto">
          Dive into detailed insights about your products with our comprehensive
          statistics page. Here, you can view charts and visualizations of
          product ratings, prices, stock availability, and other key metrics.
          Easily track trends, monitor product performance, and make informed
          decisions based on real-time data, all presented in an intuitive and
          interactive format.
        </p>
      </div>
      {/* f */}
      <div className="flex justify-center items-center px-6 py-8 mt-10 bg-white rounded-xl w-10/12 mx-auto">
        <ComposedChart
          width={1000}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            type="monotone"
            dataKey="Available"
            fill="#8884d8"
            barSize={20}
            stroke="#8884d8"
          />
          <Bar dataKey="Price" barSize={20} fill="#413ea0" />
          <Bar type="monotone" dataKey="Category" stroke="#ff7300" />
          <Bar dataKey="Rating" fill="red" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
