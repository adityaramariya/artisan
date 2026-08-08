"use client";
import { BannerVideo } from "@/components/Banner";
import About from "@/components/About";
import OurStory from "@/components/OurStory";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <BannerVideo />
      <About />
      <Gallery />
      <Services />
      <div className="hidden md:block">
        <OurStory />
      </div>
      <Blog />
      <Contact />

      <Subscribe />
    </>
  );
}
