import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Banner from "../Banner/Banner";
import Marquee from "react-fast-marquee";
import Review from "../Review/Review";
import { AuthContext } from "../../Context/ContextApi";
import Loading from "../Loading/Loading";

const Home = () => {
  document.title = "Home | GadgetHeaven";
  const { loading } = useContext(AuthContext);
  // store all product
  // const [allProduct, setAllProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [isActive, setIsActive] = useState("All Products");
  // const [filteredProduct, setFilteredProduct] = useState([]);
  // const data = useLoaderData();

  const { productData, categoryData } = useLoaderData();

  useEffect(() => {
    // setAllProduct(productData);
    setCategories(categoryData);
    // setFilteredProduct(productData);
  }, []);

  const handleCatetoryClick = (category) => {};

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <Banner />
          <div className="lg:px-20 container w-11/12 mx-auto">
            <div className="p-3">
              <h1 className="mb-14 text-center text-4xl font-bold">
                Explore Cutting-Edge Gadgets
              </h1>
              <div className="mt-8 md:flex gap-10 ">
                {/* Category Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-1 mb-5 gap-5 xl:w-56 h-fit border p-5 rounded-xl bg-white w-full md:w-fit">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "btn hover:bg-violet-300 text-black  rounded-full bg-violet-500"
                        : "btn hover:bg-violet-300 text-black  rounded-full bg-gray-200"
                    }
                    to={`/`}
                  >
                    <button>All Products</button>
                  </NavLink>
                  {/* to={`category/${category.category}` */}
                  {/* <div> */}
                  {categories.map((category, index) => (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "btn hover:bg-violet-300 text-black  rounded-full bg-violet-500"
                          : "btn hover:bg-violet-300 text-black  rounded-full bg-gray-200"
                      }
                      key={index}
                      to={`/${category.category
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <button>{category.category}</button>
                    </NavLink>
                  ))}
                  {/* </div> */}
                </div>
                {/* Single Product Details */}
                {/* <div className="grid gap-6 grid-cols-1 xl:grid-cols-3 rounded-xl w-full">
              {filteredProduct.length > 0 ? (
                filteredProduct.map((product) => (
                  <Product key={product.product_id} product={product}></Product>
                ))
              ) : (
                <p className="text-center text-2xl font-bold text-violet-800">
                  Not Available
                </p>
              )}
            </div> */}
                <Outlet></Outlet>
              </div>
            </div>
          </div>
          <div className="mt-20 w-full flex flex-col items-center justify-center mx-auto">
            <h2 className="font-bold text-2xl">Customer Review</h2>
            <Marquee className="py-10 border-none">
              {/* <MyComponent /> */}
              {/* <MyComponent /> */}
              {/* <MyComponent /> */}
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
              <Review></Review>
            </Marquee>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
