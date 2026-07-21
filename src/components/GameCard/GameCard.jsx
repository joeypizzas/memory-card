// GameCard component

import "./GameCard.css";

export function GameCard({ name }) {
  return (
    <div className="game-card">
      <div className="card-image"></div>
      <div className="card-name">{name}</div>
    </div>
  );
}
