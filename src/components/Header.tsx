"use client";

import React from "react";
import Link from "next/link";

import { CgShoppingBag } from "react-icons/cg";
import Nav from "./Nav";
import CartSidebar from "./CartSidebar";
import { useShoppingCart } from "use-shopping-cart";

function Header() {

    // add payment method
    const {cartCount , handleCartClick}= useShoppingCart();
    // console.log(cartCount);

    return(
        <header className="bg-white py-8 sticky top-0 z-40 shadow-lg">
            <div className="container mx-auto flex justify-between">
               <Link href={"/"} className="">
                <h1 className="text-[26px]">
                    <span className="text-accent">B</span>ikezz
                </h1>
               </Link>

               <div className="flex gap-[26px]">
                <Nav containerstyles='flex gap-6 justify-center items-center'/>
                <div onClick={()=>handleCartClick()} className="relative cursor-pointer">
                    <CgShoppingBag className="text-[26px]"/>
                    <div className="w-[18px] h-[18px] bg-accent flex justify-center items-center rounded-full absolute -right-1 -bottom-1 text-white font-semibold text-sm">
                        {cartCount}</div>
                </div>
                <CartSidebar/>

               </div>
                </div>
        </header>
    )
    
}

export default Header;