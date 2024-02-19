"use client";

import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from './ui/use-toast';

interface AddToCartBtnTypes{
  btnstyles:string,
  text?:string,
  icon?:any,
  name?:string,
  currency?:string,
  description?:string,
  images?:any,
  price?:number,
  id?:any
}

function AddToCartBtn({btnstyles,text,icon,name,description,currency,images,price,id}:AddToCartBtnTypes) {

  //add all items into shopping cart 
  const {addItem}=useShoppingCart();

  //toast items
  const {toast}=useToast();

  const bike:any={
    id: id,
    name: name,
    currency: currency,
    description:description,
    images: images,
    price: price,

  }

  // console.log(bike)

  return (
    <div className={`${btnstyles}`} onClick={()=>{addItem(bike);
      toast({
        title:`${name} has been added to the cart.`,
      })
    }}>{text}{icon}</div>
  )
}

export default AddToCartBtn;