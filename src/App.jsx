import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Game } from "./components/Game/Game.jsx";
import { GameInstructions } from "./components/GameInstructions/GameInstructions.jsx";
import { GameArea } from "./components/GameArea/GameArea.jsx";
import { GameCard } from "./components/GameCard/GameCard.jsx";

function App() {
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
        </GameArea>
      </Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
