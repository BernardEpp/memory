import React, { useState } from "react";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

import "./App.css";

function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={() => {}}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
