import React, { useRef } from "react";

import Hero from "../parts/Hero";
import Navbar from "../components/Navbar";
import About from "../parts/About";
import Events from "../parts/Events";
import Footer from "../parts/Footer";
import ScrolbarCarousel from "../parts/ScrolbarCarousel";

const Main = () => {
    const home = useRef(null);
    const team = useRef(null);
    const events = useRef(null);
    const count = useRef(null);
    const glimpse = useRef(null); // Added ref for Glimpse section

    const scrollToSection = (elementRef) => {
        if (!elementRef?.current) return; // Null check to prevent errors
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
    };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} reference={{ home, events, glimpse }} />
            <Hero scrollToSection={scrollToSection} reference={home} next={count} />
            <About scrollToSection={scrollToSection} reference={count} next={team} />
            <Events reference={events} />
            <ScrolbarCarousel scrollToSection={scrollToSection} reference={glimpse} next={team} />
            <Footer />
        </>
    );
};

export default Main;
