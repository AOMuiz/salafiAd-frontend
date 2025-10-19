import * as React from "react";
import Button from "./components/button";
import HowItWorks from "./components/cards/worksCards";

// import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="text-center font-semibold">
      <h1>Salafi AD Website</h1>
      <div>
        <Button text="Search" sym="yyy" />
      </div>
      <div>
        <HowItWorks
          title="Create Account"
          subtitle=" Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices
              Posuere Cubilia Curae. Donec Non Lorem Erat. Sed Vitae Vene."
        />
      </div>
    </div>
  );
}

export default App;
