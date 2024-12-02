import React, { useContext } from "react";
import { AssetContext } from "../../Context/ContextApi";
import SingleWishlist from "../SingleWishlist/SingleWishlist";

const Wishlist = () => {
  document.title = "Wishlist | GadgetHeaven";
  const { wishData, setWishData } = useContext(AssetContext);
  // console.log(wishData);

  // Delete
  const handleDeleteProduct = (id) => {
    console.log("deleting products", id);
    const filteredProduct = wishData.filter(
      (product) => product.product_id !== id
    );
    setWishData(filteredProduct);
  };

  return (
    <div>
      <div className="container w-11/12 mx-auto mt-10 xl:px-20">
        <div className="md:flex mt-4 md:mt-0 items-center justify-between">
          <p className="font-bold text-xl">WishList</p>
        </div>
      </div>

      {wishData.map((data) => (
        <SingleWishlist
          key={data.product_id}
          data={data}
          handleDeleteProduct={handleDeleteProduct}
        ></SingleWishlist>
      ))}
    </div>
  );
};

export default Wishlist;
