import React from "react";
import "./index.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax
        className="text-6xl text-white bg-gray-900 h-screen w-full"
        pages={4}
      >
        <div className="flex justify-between">
          <ParallaxLayer speed={1}>
            <p>Whale Cum</p>
          </ParallaxLayer>

          <ParallaxLayer
            speed={0.5}
            offset={1}
            factor={2}
            className="text-6xl text-white bg-cover h-screen"
            style={{ backgroundImage: 'url("/images/wolken.jpg")' }}
          >
            <p>Lorem in mein Ipsum</p>
          </ParallaxLayer>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
