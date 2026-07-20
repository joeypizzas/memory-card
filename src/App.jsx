import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Game } from "./components/Game/Game.jsx";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Game></Game>
      <Footer></Footer>
    </div>
  );
}

export default App;
