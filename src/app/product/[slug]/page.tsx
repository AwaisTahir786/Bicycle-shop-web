import Image from "next/image";
import { client, urlFor } from "@/app/lib/sanity";
import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import AddToCartBtn from "@/components/AddToCartBtn";

const getData = async (slug: any) => {
  const query = `*[_type == "product" && slug.current== '${slug}' ][0]{
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

  const data = await client.fetch(query);

  return data;
};

async function ProductDetaiils({ params }: any) {
  const bike = await getData(params.slug);
  console.log(bike);
  return (
    <section className="pt-24 pb-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* image */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bike.images[0]).url()}
              alt="bike image"
              width={473}
              height={290}
              priority
            />
          </div>
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href={"/"} className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Back to home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{bike.name}</h3>
                <p className="text-lg font-semibold">${bike.price}</p>
              </div>
              <p>{bike.description}</p>
              <AddToCartBtn 
               id={bike._id}
               name={bike.name}
               currency="USD"
               description={bike.description}
               images={bike.images}
               price={bike.price}
              btnstyles="btn btn-accent" 
              text="Add to Cart" />
            </div>

            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Bike size={20} className="text-accent" />
                <p>
                  The bicycles are partially assembled and benefit from
                  transport insurance
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetaiils;
