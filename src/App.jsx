import React, { useLayoutEffect, useRef } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function App() {

  const container = useRef(null)
  const title = useRef(null)

   useLayoutEffect( () => {
    const context = gsap.context( () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          target: container.current,
          start:"top bottom",
          end:"bottom top",
          scrub:true
        }
      })
      tl.to(title.current, {y: -5}, 0)
    })

    return () => context.revert()
  })
  return (
    <div className="" ref={container}>
      <div>
        <p className="py-96 text-6xl">PENIS</p>
      </div>
      <div>
        <p ref={title} className="text-white text-3xl">Hello</p>
        <p className="text-white text-lg">This is something</p>
      </div>
      <div>
        <img src="/images/abc.jpg" alt="" />
        <img src="/images/wolken.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
