"use client";

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper/modules";
import Bike from './Bike';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function PopularBikesCarousel({bikes}:any) {
    // console.log(bikes);
  return (
    <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{
      640: {slidesPerView: 1},
      768: {slidesPerView: 2},
      960: {slidesPerView: 3},
      1440: {slidesPerView: 4},

    }}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}

    className='popular-bike-slider mb-8'
    
    >
        {bikes.map((bike_details:any) => {
            // console.log(bike_details);
            return <SwiperSlide key={bike_details._id}>
                <Bike bike={bike_details}/>
            </SwiperSlide>

        })}
    </Swiper>
  )
}

export default PopularBikesCarousel