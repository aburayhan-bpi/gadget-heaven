import React from "react";
import AddProduct from "../forms/AddProduct";
import UpdateProduct from "../forms/UpdateProduct";

const AdminDashboard = () => {
  return (
    <div className="border max-w-[1390px] mx-auto px-4">
      admin dashboard
      {/* aadd forms */}
      <AddProduct></AddProduct>
      {/* aadd forms */}
      {/* update forms */}
      <UpdateProduct></UpdateProduct>
      {/* update forms */}
    </div>
  );
};

export default AdminDashboard;
