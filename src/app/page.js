'use client'
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import { LaptopScroll } from "@/components/LaptopScroll/LaptopScroll";
import Process from "@/components/Process/Process";
import Stats from "@/components/Stats/Stats";
import Trustedby from "@/components/TrustedBy/Trustedby";
import Visual from "@/components/Visual/Visual";
import Work from "@/components/Work/Work";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Team from "@/components/Grids/GridOne/Team/Team";
import Grids from "@/components/Grids/Grids";

export default function Home() {


  useEffect(() => {
    const checkBottom = () => {
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      if (main && footer) {
        main.style.transition = '1s'
        const mainBottom = main.getBoundingClientRect().bottom;
        const viewportHeight = window.innerHeight;
        if (mainBottom <= viewportHeight) {
          main.style.transform = 'scale(0.92)'; // Scale up the main content
        } else {
          main.style.transform = 'scale(1)'; // Reset the scale if not at the bottom
        }
      }
    };

    const handleScroll = () => {
      checkBottom();
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Stats />
        <LaptopScroll />
        <Process />
        <Trustedby />
        <Visual />
        <Work />
        <Grids />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
