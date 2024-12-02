import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Product/Product";
import DetailPage from "./components/DetailPage/DetailPage";
import FilteredProduct from "./components/FilteredProduct/FilteredProduct";
import AllProducts from "./components/ShowProducts/AllProducts";
import Accessories from "./components/ShowProducts/Accessories";
import Phones from "./components/ShowProducts/Phones";
import SmartWatches from "./components/ShowProducts/SmartWatches";
import Laptops from "./components/ShowProducts/Laptops";
import Macbook from "./components/ShowProducts/Macbook";
import Iphones from "./components/ShowProducts/iPhone";
// import ContextApi from "./Context/ContextApi";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CombinedProvider from "./Context/ContextApi";
import PrivateRegisterRoute from "./components/PrivateRoute/PrivateRegisterRoute";
import Profile from "./components/Profile/Profile";
import ForgotPass from "./components/ForgotPass/ForgotPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const productData = await fetch("/productData.json").then((res) =>
            res.json()
          );
          const categoryData = await fetch("/categoryData.json").then((res) =>
            res.json()
          );
          return { productData, categoryData };
        },
        children: [
          {
            path: "/",
            element: <FilteredProduct></FilteredProduct>,
            children: [
              {
                index: true,
                path: "/",
                element: <AllProducts />,
                loader: () => fetch("/productData.json"),
              },

              {
                path: "laptops",
                element: <Laptops></Laptops>,
                loader: () => fetch("/productData.json"),
              },
              {
                path: "phones",
                element: <Phones></Phones>,
                loader: () => fetch("/productData.json"),
              },
              {
                path: "accessories",
                element: <Accessories></Accessories>,
                loader: () => fetch("/productData.json"),
              },
              {
                path: "smart-watches",
                element: <SmartWatches></SmartWatches>,
                loader: () => fetch("/productData.json"),
              },
              {
                path: "macbook",
                element: <Macbook></Macbook>,
                loader: () => fetch("/productData.json"),
              },
              {
                path: "iphone",
                element: <Iphones></Iphones>,
                loader: () => fetch("/productData.json"),
              },
            ],
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:product_id",
        element: <DetailPage></DetailPage>,
        loader: () => fetch("/productData.json"),
      },
      {
        path: "/register",
        element: (
          // <PrivateRegisterRoute>
          <Register></Register>
          // </PrivateRegisterRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PrivateRegisterRoute>
            <Login></Login>
          </PrivateRegisterRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPass></ForgotPass>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CombinedProvider>
      <RouterProvider router={router} />
    </CombinedProvider>
  </StrictMode>
);
