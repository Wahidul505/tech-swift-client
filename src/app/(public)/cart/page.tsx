"use client";
import CartProductCard from "@/components/Card/CartProductCard";
import { getFromLocalStorage } from "@/utils/localStorage";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartStringify = getFromLocalStorage("cart");
    if (cartStringify) {
      setCart(JSON.parse(cartStringify as string));
    } else {
      setCart([]);
    }
  }, []);

  if (cart.length === 0) {
    return <div>No Products added into cart</div>;
  }

  return (
    <div>
      {cart.map((product: any) => (
        <CartProductCard key={product?.productId} product={product} />
      ))}
    </div>
  );
};

export default CartPage;
