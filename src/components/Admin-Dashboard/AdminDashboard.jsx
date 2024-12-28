import React from "react";
import AddProduct from "../forms/AddProduct";
import UpdateProduct from "../forms/UpdateProduct";
import { NavLink, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="border max-w-[1390px] mx-auto px-4">
      admin dashboard
      <div className="flex flex-col gap-3">
        <NavLink to="/admin-dashboard/add-products">
          <button className="btn bg-primary text-white">Add Products</button>
        </NavLink>
        <NavLink to="/admin-dashboard/added-products">
          <button className="btn bg-primary text-white">
            My Added Products
          </button>
        </NavLink>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      {/* aadd forms */}
      {/* <AddProduct></AddProduct> */}
      {/* aadd forms */}
      {/* all products */}
      {/* update forms */}
      {/* <UpdateProduct></UpdateProduct> */}
      {/* update forms */}
    </div>
  );
};

export default AdminDashboard;
