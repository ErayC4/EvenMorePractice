import React, { useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

const App = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 2 },
    });


    // GSAP animation for "h1"
    tl.to("h1", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2.2,
    });

    tl.to(".rotation", {
        x: 800,
        rotation: 360,
        duration: 3,
        scrollTrigger: ".rotation",
      });

  }, []); 

  const randomContent = (
    <div>
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
        <p>Lorem</p>
      </div>

      <div className="flex justify-around gap-4 pt-4 pb-16">
        <img src="/images/abc.jpg" alt="" className="w-96 object-cover" />
        <img src="/images/wolken.jpg" alt="" className="w-96 object-cover" />
        <img src="/images/xyz.jpg" className="w-96 object-cover" alt="" />
      </div>
    </div>
  )
  

  return (
    <div className="pl-8">
      <h1 className="text-4xl pb-8 pt-32">Some Title</h1>
      {randomContent}
      {randomContent}
      {randomContent}

      <img src="/images/xyz.jpg" className="rotation w-96 object-cover" alt="" />

    </div>
  );
};

export default App;
