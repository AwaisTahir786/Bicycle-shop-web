"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";

function CartSidebar() {
  const {
    shouldDisplayCart,
    cartCount,
    cartDetails,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>

        <>
          {cartCount === 0 ? (
            <div>
              <h5 className="text-black/50">Your cart is Empty.</h5>
              </div>
          ) : (
            // Error Scroll Area 1:45
            <ScrollArea className='pr-4 mb-4 h-[70vh] xl:h-[74vh] '>
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]): any => {
                  return <CartItem key={key} item={item} />;
                })}
            </ScrollArea>
          )}
        </>

        {cartCount && cartCount > 0 && (
          <div >
            <div className="flex justify-center font-semibold">
              <div className="uppercase mb-5">
                Total
              </div>
              <div>${totalPrice}</div>
            </div>
            <CheckoutBtn/>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartSidebar;
