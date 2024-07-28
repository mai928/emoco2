'use client'
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import Product from "@/components/product/Product";
import Services from "@/components/services/Services";
import Slider from "@/components/slider/Slider";
import Videos from "@/components/video/Videos";

export default function Home() {
  return (
    <section>
      <NavBar />
      <Slider />
      <About />
      <Services />
      <Contact />
      <Product />
      <Footer />
      {/* <Videos/> */}
    </section>
  );
}
