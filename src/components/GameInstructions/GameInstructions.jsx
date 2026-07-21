// GameInstructions component

import "./GameInstructions.css";
import { ResetGameButton } from "../ResetGameButton/ResetGameButton";

export function GameInstructions() {
  return (
    <div className="game-instructions">
      <div className="instructions">
        Click each image once. Click twice and it's game over.
      </div>
      <div className="score-and-reset">
        <div className="score">
          <div className="current-score">Score: 5</div>
          <div className="high-score">High score: 10</div>
        </div>
        <ResetGameButton></ResetGameButton>
      </div>
    </div>
  );
}
