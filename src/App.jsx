import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import DarkModeToggle from "./components/DarkModeToggle";
import { images } from "./constants"; // Import images from constants

function App() {
    const [points, setPoints] = useState(0);
    const [gameOver, setGameOver] = useState("");
    const [boxes, setBoxes] = useState([]);
    const [clickedIds, setClickedIds] = useState(new Set());
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [shuffledImages, setShuffledImages] = useState([]);
    const totalImages = images.length;

    const shuffleArray = (array) => {
        return array.sort(() => 0.5 - Math.random());
    };

    const initializeGame = (initial = true) => {
        const boxCount = 5;

        if (initial) {
            const shuffled = shuffleArray([...images]);
            setShuffledImages(shuffled);
        }

        let availableIds = [...Array(totalImages).keys()].map((id) => id + 1);
        const unclickedIds = availableIds.filter((id) => !clickedIds.has(id));

        if (unclickedIds.length === 0) {
            setGameOver("won");
            return;
        }

        let selectedIds = [];
        const unclickedBox =
            unclickedIds[Math.floor(Math.random() * unclickedIds.length)];
        selectedIds.push(unclickedBox);

        let remainingIds = shuffleArray(
            availableIds.filter((id) => id !== unclickedBox)
        );
        selectedIds = selectedIds.concat(remainingIds.slice(0, boxCount - 1));

        const newBoxes = selectedIds.map((id) => ({
            key: id,
            identifier: id,
            clicked: clickedIds.has(id),
            imageUrl: shuffledImages[id - 1]
        }));

        setBoxes(newBoxes);

        if (initial) {
            setPoints(0);
            setGameOver("");
            setClickedIds(new Set());
        }
    };

    useEffect(() => {
        initializeGame(true);
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        if (shuffledImages.length > 0) {
            setBoxes((prevBoxes) => {
                return prevBoxes.map((box) => ({
                    ...box,
                    imageUrl: shuffledImages[box.identifier - 1]
                }));
            });
        }
    }, [shuffledImages]);

    const handleBoxClick = (clickedBox) => {
        if (gameOver) return;

        if (clickedIds.has(clickedBox.identifier)) {
            setGameOver("lost");
            return;
        }

        setClickedIds((prevClickedIds) => {
            const updatedClickedIds = new Set(prevClickedIds);
            updatedClickedIds.add(clickedBox.identifier);

            if (updatedClickedIds.size === totalImages) {
                setGameOver("won");
            }

            return updatedClickedIds;
        });

        setPoints((prevPoints) => prevPoints + 1);
        shuffleBoxes();
    };

    const shuffleBoxes = () => {
        setBoxes((prevBoxes) => {
            const availableIds = [...Array(totalImages).keys()].map(
                (id) => id + 1
            );
            const unclickedIds = availableIds.filter(
                (id) => !clickedIds.has(id)
            );

            if (unclickedIds.length === 0) {
                setGameOver("won");
                return prevBoxes;
            }

            let selectedIds = [];
            const unclickedBox =
                unclickedIds[Math.floor(Math.random() * unclickedIds.length)];
            selectedIds.push(unclickedBox);

            const remainingUnclicked = shuffleArray(
                unclickedIds.filter((id) => id !== unclickedBox)
            );

            const remainingClicked = shuffleArray(
                availableIds.filter((id) => clickedIds.has(id))
            );

            const neededBoxes = 5 - selectedIds.length;

            selectedIds = selectedIds.concat(
                remainingUnclicked.slice(0, neededBoxes),
                remainingClicked.slice(
                    0,
                    Math.max(0, neededBoxes - remainingUnclicked.length)
                )
            );

            selectedIds = selectedIds.slice(0, 5);

            const newBoxes = selectedIds.map((id) => ({
                key: id,
                identifier: id,
                clicked: clickedIds.has(id),
                imageUrl: shuffledImages[id - 1]
            }));

            return newBoxes;
        });
    };

    const resetGame = () => {
        setPoints(0);
        setClickedIds(new Set());
        initializeGame();
        setGameOver("");
    };

    return (
        <div className={`game-container ${isDarkMode ? "dark-mode" : ""}`}>
            <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            />
            <span className="game-title">One Piece Memory Game</span>
            <ScoreBoard
                points={points}
                gameOver={gameOver}
                resetGame={resetGame}
            />
            <GameBoard
                boxes={boxes}
                handleBoxClick={handleBoxClick}
                isDarkMode={isDarkMode}
            />
        </div>
    );
}

export default App;
