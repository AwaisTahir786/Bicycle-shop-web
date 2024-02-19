"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import Bike from './Bike';
import { RadioGroup } from '@radix-ui/react-radio-group';
import { RadioGroupItem } from './ui/radio-group';
import { Slider } from './ui/slider';

function BikeCategories({bikes}:any) {
    const [category, setcategory]=useState("all");
    const [filterBikes, setFilterBikes]=useState<any>([]);
    const [price, setPrice]=useState(900);
    // console.log(price);


    useEffect(()=>{
        const filtered=bikes.filter((bike:any)=>{
            const categoryMatch = category === "all" ? bikes : bike.categories.some((categ:any)=> categ.name === category);
            const priceMatch = bike.price <= price;
            return categoryMatch && priceMatch
        })
        setFilterBikes(filtered)
    },[category,price,bikes]);

    // console.log(bikes);
  return (
    <section className='min-h-[1200px] py-10'>
        <div className='container mx-auto '>
          <div className='flex flex-col'>
              {/* sidebar */}
              <aside className=' w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
                <RadioGroup defaultValue='all' className='flex flex-col mb-6  gap-4'>
                    <div className=''>
                        <RadioGroupItem value='all' id='all' onClick={()=> setcategory("all")}/>
                        <label htmlFor="all" className='ml-2'>All</label>

                    </div>
                    <div>
                        <RadioGroupItem value='road' id='road'onClick={()=> setcategory("road")}/>
                        <label htmlFor="road" className='ml-2'>Road</label>

                    </div>
                    <div>
                        <RadioGroupItem value='professional' id='professional' onClick={()=> setcategory("professional")}/>
                        <label htmlFor="professional" className='ml-2'>Professional</label>

                    </div>
                    <div>
                        <RadioGroupItem value='extreme' id='extreme' onClick={()=> setcategory("extreme")}/>
                        <label htmlFor="extreme" className='ml-2'>Extreme</label>

                    </div>
                </RadioGroup>
                {/* price Slider */}
                <div className='max-w-56'>
                    <div className='text-lg mb-4 font-medium'>
                        Max Price:{" "}
                        <span className='text-accent font-semibold ml-2'>${price}</span>
                        <span className='ml-2'>
                           ({filterBikes.length > 1 
                            ? `${filterBikes.length} items`
                            : filterBikes === 0
                            ? `${filterBikes.length} items`
                            : `${filterBikes.length} item`
                             })
                        </span>
                        <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(val)=>setPrice(val[0])}/>


                    </div>

                </div>
                </aside>
            {/* bike list */}
            <div className='w-full xl:w-[1050px] ml-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
                {filterBikes.map((bike:any)=>{
                    return <Bike key={bike.price_id} bike={bike} />
                })}

                </div>
               
            </div>


          </div>
        </div>

    </section>
  )
}

export default BikeCategories;