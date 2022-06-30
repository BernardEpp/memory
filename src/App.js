import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import shuffle from "./utilities/shuffle";

import "./App.css";
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState(shuffle); // Shuffeled cards array
  const [pickOne, setPickOne] = useState(null); // First Selection
  const [pickTwo, setPickTwo] = useState(null); // Second Selection
  const [disabled, setDisabled] = useState(false); // Delay Handler
  const [wins, setWins] = useState(0); // Win streak 

  // Handle card selection
  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  const handleTurn = () => {
    setPickOne(null); 
    setPickTwo(null);
    setDisabled(false);
  };

  const handleNewGame = () => {
    setWins(0);
    handleTurn();
    setCards(shuffle);
  };

  // For selection and match handling
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if cards are the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, matched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        handleTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay 
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);


  // if player has found all matches
  useEffect(() => {

    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.matched);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      console.log('Increased wins!');
      handleTurn();
      console.log('set new turn!');
      setCards(shuffle);
      console.log('shuffled cards!');
    }
  }, [cards, wins]);

  return (
    <>
      <Header handleNewGame={handleNewGame} wins={wins}></Header>
      
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            ></Card>
          );
        })}
      </div>
    </>
  );
}

export default App;
