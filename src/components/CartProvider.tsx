"use client";

import React from 'react'
import {CartProvider as CProvider} from "use-shopping-cart";

function CartProvider({children}:any) {
  return (
    <CProvider
    mode='payment'
    cartMode='client-only'
    stripe=''
    successUrl='success'
    cancelUrl='error'
    language='en-US'
    currency='USD'
    billingAddressCollection={true}
    shouldPersist={true}
    >
        {children}
    </CProvider>
  )
}

export default CartProvider;