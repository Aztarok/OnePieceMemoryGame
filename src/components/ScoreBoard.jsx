import React from "react";

function ScoreBoard({ points, gameOver, resetGame }) {
    return (
        <div>
            <div id="points">Points: {points} / 8</div>
            {gameOver && (
                <div className="game-over-overlay">
                    {gameOver === "lost" ? (
                        <h2>
                            Game Over! You clicked a character more than once.
                        </h2>
                    ) : (
                        <h2>You won! Great job!</h2>
                    )}
                    <button id="reset-button" onClick={resetGame}>
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
}

export default ScoreBoard;
