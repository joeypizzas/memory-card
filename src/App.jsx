import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Game } from "./components/Game/Game.jsx";
import { GameInstructions } from "./components/GameInstructions/GameInstructions.jsx";
import { GameArea } from "./components/GameArea/GameArea.jsx";
import { GameCard } from "./components/GameCard/GameCard.jsx";
import { useState } from "react";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const stored = localStorage.getItem("highScore");
    return stored ? Number(stored) : 0;
  });

  return (
    <div className="app">
      <Header></Header>
      <Game>
        <GameInstructions></GameInstructions>
        <GameArea>
          <GameCard name="Pepperoni"></GameCard>
          <GameCard name="Sausage"></GameCard>
          <GameCard name="Mushroom"></GameCard>
          <GameCard name="Peppers"></GameCard>
          <GameCard name="Meatball"></GameCard>
          <GameCard name="Onions"></GameCard>
          <GameCard name="Pineapple"></GameCard>
          <GameCard name="Ham"></GameCard>
          <GameCard name="Jalapenos"></GameCard>
          <GameCard name="Garlic"></GameCard>
          <GameCard name="Bacon"></GameCard>
          <GameCard name="Chicken"></GameCard>
        </GameArea>
      </Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
