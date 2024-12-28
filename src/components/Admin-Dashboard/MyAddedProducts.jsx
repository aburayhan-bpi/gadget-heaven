import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/ContextApi";

const MyAddedProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/${user?.email}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Products quantity: {products.length}</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((singleProduct) => (
              <tr
                key={singleProduct?._id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  <img src={singleProduct?.product_image} alt="" />
                </th>
                <td className="px-6 py-4">{singleProduct?.product_title}</td>
                <td className="px-6 py-4">{singleProduct?.category}</td>
                <td className="px-6 py-4">${singleProduct?.price}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="bg-green-500 p-1 rounded-lg text-white">
                    Edit
                  </button>
                  <button className="bg-green-500 p-1 rounded-lg text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedProducts;
