import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

function Bike({ bike }: any) {
  // console.log(bike);

  const popularbikeCat = bike.categories.find(
    (bike: any) => bike.name === "popular"
  );
  // console.log(popularbikeCat);
  return (
    <div className="group">
      <div className="border h-[328px] p-4 mb-5 overflow-hidden relative ">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularbikeCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}

          <Image
            src={urlFor(bike.images[0]).url()}
            alt="bike image"
            width={240}
            height={147}
          />
        </div>
        {/* btn group */}

        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center opacity-0 group-hover:opacity-100 gap-[10px] transtion-all duration-300">
          <AddToCartBtn
          id={bike._id}
            name={bike.name}
            currency="USD"
            description={bike.description}
            images={bike.images}
            price={bike.price}
            btnstyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon btn-primary ">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {bike.categories[0].name} bike
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-accent">${bike.price}</div>
    </div>
  );
}

export default Bike;
