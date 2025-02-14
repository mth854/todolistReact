import React, { useState, useEffect } from "react";
import "./clickcss.css";

function Click() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(3); // Game duration in seconds
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if game is started
  const [hightScore, sethighScore] = useState(0);
  // Start the game timer
  useEffect(() => {
    if (time > 0 && gameStarted && !gameOver) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (time === 0) {
      setGameOver(true);
    }
  }, [time, gameStarted, gameOver]);

  // Handle button click
  const handleClick = () => {
    if (!gameOver) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Start the game when the Start button is clicked
  const handleStartGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setTime(3); // Reset timer to 30 seconds
  };

  // Reset the game after it's over
  const handleReset = () => {
    if (hightScore<score){
    sethighScore(score);
    }
    setScore(0);
    setTime(3);
    setGameOver(false);
    setGameStarted(false); // Set gameStarted to false to show the start button again
  };

  return (
    <div className="game-container">
      <h1>Click the Button Game</h1>
      {/* Show the Start Game button before the game starts */}
      {!gameStarted && !gameOver && (
        <div>
          <button className="start-button" onClick={handleStartGame}>
            Start Game
          </button>
        </div>
      )}

      {/* Scoreboard */}
      {gameStarted && !gameOver && (
        <div className="scoreboard">
          <h2>Score: {score}</h2>
          <h3>Time Remaining: {time}s</h3>
        </div>
      )}

      {/* Game Over Screen */}
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <h2>The highest score was:{hightScore}</h2>
          <p>Your final score is {score}</p>
          <button className="reset-button" onClick={handleReset}>
            Play Again
          </button>
        </div>
      )}

      {/* Button to click for the game */}
      {gameStarted && !gameOver && (
        <button className="game-button" onClick={handleClick}>
          Click Me!
        </button>
      )}
    </div>
  );
}

export default Click;
