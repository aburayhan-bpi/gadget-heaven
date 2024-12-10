import React, { useState, useEffect } from "react";
import {
  FaTag,
  FaDollarSign,
  FaRegListAlt,
  FaImage,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";

const categories = [
  { category: "Laptops" },
  { category: "Phones" },
  { category: "Accessories" },
  { category: "Smart Watches" },
  { category: "MacBook" },
  { category: "iPhone" },
];

const UpdateProduct = ({ existingProduct, onUpdate }) => {
  const [formData, setFormData] = useState({
    product_title: "",
    product_image: "",
    category: "",
    price: "",
    description: "",
    specification: "",
    availability: false,
    rating: "",
  });

  // Preload the form with existing product data
  useEffect(() => {
    if (existingProduct) {
      setFormData(existingProduct);
    }
  }, [existingProduct]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Product Data:", formData);
    if (onUpdate) {
      onUpdate(formData); // Call the parent function to handle the update
    }
    alert("Product updated successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaRegListAlt className="text-green-500" />
        Update Product
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-2 rounded-md shadow hover:bg-green-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
