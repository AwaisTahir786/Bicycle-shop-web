import { urlFor } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

function CartItem({ item }: any) {

  const {removeItem, incrementItem, decrementItem}=useShoppingCart();
  return (
    <div className="flex w-full justify-between items-center mb-4  h-[120px] border-b ">
      {/* image */}

      <div className="w-[110px] h-[110px] relative ">
        <Image
          src={urlFor(item.images[0]).url()}
          alt="logo"
          fill
          sizes="(max-width: 110px) 110px, 110px"
          className="object-contain "
        />
      </div>
      {/* Name, Price , Quantity , Remove */}
      <div className="flex flex-col gap-4 justify-center w-full max-w-[180px]">
        <div className="flex justify-between items-center border">
          <h5>{item.name}</h5>
          <button onClick={()=>removeItem(item.id)}>
            <FaX className="text-sm" />
          </button>
        </div>

        {/* Increment, Decrement, item price */}

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={()=>decrementItem(item.id)}>
              <FaMinus />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={()=>incrementItem(item.id)}>
              <FaPlus />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">${item.price * item.quantity}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
