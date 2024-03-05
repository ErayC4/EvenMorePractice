import React, { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useLayoutEffect(() => {
    gsap.to(".title", {
      duration: 1,
      ease: "Expo.easeInOut",
      x: 200,
      opacity: 1,
    });
  }, []);
  return (
    <div className="pl-8">
      <p className="text-4xl pb-8 pt-32 title opacity-0">A very cool TITLE</p>
    </div>
  );
};

export default App;
