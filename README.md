# Memory Game

## Overview

This is a simple One Piece memory game built with React and Vite. The objective
of the game is to click on boxes containing images without clicking the same box
more than once. The game keeps track of the player's points and displays a
message when the game is won or lost.

## Features

-   **Image Memory Game**: Players click on boxes to reveal images. If they
    click the same box twice, they lose the game.
-   **Points Tracking**: The game tracks the number of points scored based on
    the number of unique boxes clicked.
-   **Dark Mode**: A toggle switch allows users to switch between light and dark
    themes.
-   **Responsive Design**: The game is designed to be responsive and works well
    on various screen sizes.

## What I Learned

-   **Enhanced Understanding of React and Vite**: Gained valuable experience in
    using Vite as a build tool and improved my grasp of React's state
    management, particularly with hooks like `useState` and `useEffect`.

-   **Improved Code Organization**: Recognized the importance of breaking down
    components into smaller, reusable parts. This not only enhances readability
    but also makes maintenance easier.

-   **CSS and Styling Practices**: Developed better practices for styling
    components, including the implementation of responsive design and dark mode
    features, which improve user experience.

-   **API Integration Challenges**: Encountered challenges while trying to
    integrate the Giphy API so I put it to the side for now, which has motivated
    me to explore API usage further and implement it in future projects.

-   **UI/UX Design Insights**: While the current design is basic, I learned the
    significance of user interface and experience design, and I plan to enhance
    the visual appeal of the application in future iterations.

## Code Structure

-   **`src/App.jsx`**: The main component that manages the game state, including
    points, game over status, and the boxes displayed.
-   **`src/components/Box.jsx`**: A functional component that represents each
    box in the game. It handles click events to update the game state.
-   **`src/components/GameBoard.jsx`**: A component that renders the game board
    and displays the boxes.
-   **`src/components/ScoreBoard.jsx`**: A component that displays the current
    score and game status.
-   **`src/components/DarkModeToggle.jsx`**: A component that allows users to
    toggle between light and dark modes.
-   **`src/constants.jsx`**: A file that exports an array of image URLs used in
    the game.
-   **`src/App.css`**: The CSS file that styles the application, including dark
    mode styles.
-   **`src/main.jsx`**: The entry point of the application that renders the
    `App` component into the DOM.
-   **`.env.local`**: Contains environment variables, including the Giphy API
    key.
-   **`vite.config.js`**: Configuration file for Vite, which is used to bundle
    the application.

## How It Works

1. **State Management**: The application uses React's `useState` and `useEffect`
   hooks to manage the game state. Key states include:

    - `points`: Tracks the player's score.
    - `gameOver`: Indicates whether the game has been won or lost.
    - `boxes`: An array of box objects that contain image URLs and their clicked
      status.
    - `clickedIds`: A set that keeps track of the IDs of boxes that have been
      clicked.

2. **Game Initialization**: When the game starts, the images are shuffled, and a
   set number of boxes are selected randomly. The game initializes with a score
   of 0 and no boxes clicked.

3. **Box Click Handling**: When a box is clicked, the application checks if it
   has already been clicked. If it has, the game is marked as lost. If not, the
   score increases, and the clicked box is added to the set of clicked IDs.

4. **Game Over Logic**: The game checks if all boxes have been clicked. If so,
   it marks the game as won. If the player clicks a box more than once, the game
   is marked as lost.

5. **Dark Mode**: The application allows users to toggle dark mode, which
   changes the background and text colors for better visibility in low-light
   conditions.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd memory-game
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and go to `http://localhost:5173` to play the game.

## License

This project is licensed under the MIT License.
