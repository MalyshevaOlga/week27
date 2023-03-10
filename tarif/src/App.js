import React from "react";
import "./App.css";
import Tarif from "./components/tarif";
import themeA from "./styles/300.module.css";
import themeB from "./styles/450.module.css";
import themeC from "./styles/550.module.css";
import themeD from "./styles/1000.module.css";

const rates = [
  {
    rate: "300",
    speed: "10",
  },
  {
    rate: "450",
    speed: "50",
  },
  {
    rate: "550",
    speed: "100",
    isSelected: "selected",
  },
  {
    rate: "1000",
    speed: "200",
  },
];

function App() {
  const themes = [themeA, themeB, themeC, themeD];
  return (
    <div className="App">
      <header className="App-header">Наши тарифы</header>
      <div className="plans">
        {rates.map((card, i) => (
          <Tarif
          key={i}
            rate={card.rate}
            price={card.rate}
            speed={card.speed}
            theme={themes[i]}
            isSelected={card.isSelected}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
