import React from "react";
import Box from "./Box";

function GameBoard({ boxes, handleBoxClick, isDarkMode }) {
    return (
        <div id="game-board" className={isDarkMode ? "dark-mode" : ""}>
            {boxes.map((box) => (
                <Box key={box.key} box={box} handleClick={handleBoxClick} />
            ))}
        </div>
    );
}

export default GameBoard;
