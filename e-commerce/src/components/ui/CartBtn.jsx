import React, { useEffect, useState } from "react";
import { CartProvider, useCart } from "react-use-cart";

export const CartBtn = ({ item }) => {
  const { addItem } = useCart();

  const [add, setAdd] = useState("ADD TO CART");

  useEffect(() => {
    setTimeout(() => {
      setAdd("ADD TO CART");
    }, 3000);
  }, [add]);

  return (
    <div className="flex gap-3">
      <button
        className="mt-2 bg-orange-600 text-white text-sm font-bold py-2 px-12 rounded-sm"
        onClick={() => {
          addItem(item);
          setAdd("Added");
        }}
      >
        {add}
      </button>
    </div>
  );
};
