import React, { useEffect } from "react";
import { gsap, CSSRulePlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const App = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

    // Create GSAP timeline
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });

    // Get the CSS rule for ".card:before"
    const flagPoles = CSSRulePlugin.getRule(".card:before");

    // GSAP animation for "h1"
    tl.to(".helpme", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2.2,
    });

    // GSAP animation for ".card:before"
    tl.from(
      flagPoles,
      { stagger: 1, opacity: 0, transform: "translateY(100px)" },
      "-=2"
    );
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="helpme pl-8">
      <h1 className="text-4xl pb-8">Some Title</h1>
      <div className="flex justify-between gap-4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          molestias voluptas iste, porro tempora alias cupiditate minima laborum
          sint reprehenderit ad, tenetur labore blanditiis quis? Molestias ipsam
          reprehenderit facere qui?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro
          dolore est vel quisquam explicabo ducimus quos expedita, fuga, tempore
          a at iusto. Error, accusantium. Aliquam illo accusantium esse itaque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          corporis soluta, eveniet magnam perspiciatis dolores iste cum fugiat
          exercitationem facere accusantium est perferendis necessitatibus?
          Alias recusandae laborum assumenda dicta nulla.
        </p>
      </div>

      <div className="flex justify-around gap-4 pt-4">
        <img src="/images/abc.jpg" alt="" className="w-96 object-cover" />
        <img src="/images/wolken.jpg" alt="" className="w-96 object-cover" />
        <img src="/images/xyz.jpg" className="w-96 object-cover" alt="" />
      </div>
    </div>
  );
};

export default App;
