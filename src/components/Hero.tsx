import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-primary/5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-center">
            <h1 className="text-center max-w-[508px] md:text-[80px]  xl:text-left mb-6">
              Where <span>Joyful</span> Cycling Begins
            </h1>
            <p className="mb-10 text-lg md:max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              soluta provident debitis adipisci delectus perferendis? Voluptatem
              earum fugiat laboriosam iusto architecto ipsa sunt est consequatur
              necessitatibus qui, odit iure similique!
            </p>

            {/* button  */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
                <Link href="/" className="mx-auto md:mx-0 m">
                    <button className="btn btn-primary xl:ml-[-174px]">Shop Now</button>
                
                </Link>
                <Link href="/our-bikes" className="mx-auto md:mx-0">
                    <button className="btn btn-accent">Our bikes</button>
                
                </Link>
            </div>
          </div>
          {/* Image */}
          <div className="hidden xl:flex">
            <Image
              src="/hero.png"
              alt="hero image"
              width={765}
              height={480}
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
