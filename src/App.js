import React, { useState } from "react";

import Fade from './Fade';
import Slide from './Slide';
import "./styles.css";

export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  const [isSlideToggled, setIsSlideToggled] = useState(false);
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Framer Motion Advance</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsToggled(!isToggled)}>Fade</button>
        <Fade isActive={isToggled}>
          <div className="card">
            <h4>Fade Feature</h4>
            <p>this is inside the card</p>
          </div>
        </Fade>
        <button onClick={() => setIsSlideToggled(!isSlideToggled)}>Slide</button>
        {/* Basic Slide */}
        <Slide isActive={isSlideToggled}>
          <div className="card">
            <h4>Slide Feature</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
        {/* Advance Slide */}
        <Slide
          isActive={isSlideToggled}
          direction={-1}
          distance={600}
        >
          <div className="card">
            <h4>Advance Slide Feature</h4>
            <p>this is inside the card</p>
          </div>
        </Slide>
      </main>
    </div>
  );
}
