import React, { useContext, useState } from "react";
import {
  FaTag,
  FaDollarSign,
  FaRegListAlt,
  FaImage,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";
import { AuthContext } from "../../Context/ContextApi";
import axios from "axios";
import toast from "react-hot-toast";

const categories = [
  { category: "Laptops" },
  { category: "Phones" },
  { category: "Accessories" },
  { category: "Smart Watches" },
  { category: "MacBook" },
  { category: "iPhone" },
];

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    product_title: "",
    product_image: "",
    category: "",
    price: "",
    description: "",
    specification: "",
    availability: false,
    rating: "",
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, userEmail } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);

    // sent product data to db
    axios.post("http://localhost:5000/api/v1/product", formData).then((res) => {
      console.log(res.data);
      setFormData("");
      alert("Product added successfully to db!");
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaRegListAlt className="text-blue-500" />
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Title */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaTag className="text-gray-600" />
            Product Title
          </label>
          <input
            type="text"
            name="product_title"
            placeholder="Enter product title"
            value={formData.product_title}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Product Image URL */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaImage className="text-gray-600" />
            Product Image URL
          </label>
          <input
            type="url"
            name="product_image"
            placeholder="Enter product image URL"
            value={formData.product_image}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaRegListAlt className="text-gray-600" />
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaDollarSign className="text-gray-600" />
            Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaInfoCircle className="text-gray-600" />
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Specification */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaRegListAlt className="text-gray-600" />
            Specifications
          </label>
          <textarea
            name="specification"
            placeholder="Enter specifications (comma-separated)"
            rows="3"
            value={formData.specification}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          ></textarea>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
            className="h-5 w-5 text-blue-500"
          />
          <span className="text-gray-700">Available in Stock</span>
        </div>

        {/* Rating */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Enter product rating (1-5)"
            step="0.1"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>

        {/* user email */}
        <div>
          <label className="font-medium text-gray-700 mb-1 block flex items-center gap-2">
            {/* <FaTag className="text-gray-600" /> */}
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            // placeholder="Enter product title"
            value={user?.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            // required
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded-md shadow hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
