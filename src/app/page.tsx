import Hero from "@/components/Hero";
import PopularBikes from "@/components/PopularBikes";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <PopularBikes/>     
    </main>
  );
}
