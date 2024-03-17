import React from 'react'
import { client } from '../lib/sanity';
import BikeCategories from '@/components/BikeCategories';

async function getData(){

        const query=`*[_type == "product" ]{
            _id,
              name,
              description,
              images,
              price,
              price_id,
              "slug": slug.current,
              "categories": categories[]->{
              name
              }
          }`;
        const data= await client.fetch(query);
        return data;
    
}


async function OurBikes() {
    const bikes = await getData();
    // console.log(bikes);
  return (
    <div><BikeCategories bikes={bikes} /></div>
  )
}

export default OurBikes;