import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useLayoutEffect(() => {
    gsap.to(".title", {
      duration: 1,
      ease: "Expo.easeInOut",
      y: 128,
      opacity: 1,
      stagger: 0.1,
    });
    gsap.to(".title", {
      duration: 1,
      y: 128,
      opacity: 1,
      stagger: 0.1,
    });
  }, []);
  return (
    <div>
      <video src="/videos/city.mp4" autoPlay loop muted className="h-screen w-screen object-cover"/>
      <div className="absolute w-full h-full top-0">
        <p className="text-[10rem] title opacity-0">CREATIVE</p>
        <p className="text-[10rem] title opacity-0 text-right ml-auto">DEVELOPER</p>
        <p className="text-[10rem] title opacity-0 text-center">&DESIGNER</p>
      </div>
      
    </div>
  );
};

export default App;
