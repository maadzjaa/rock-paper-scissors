import { useState } from "react";
import "./App.css";

enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}

function App() {
  const [player1, setPlayer1] = useState<string | null>(null);
  const [player2, setPlayer2] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  function handlePlayerChoice(value: string): void {
    if (!player1) {
      setResult(null);
      setPlayer1(value);
    } else {
      setPlayer2(value);
      setResult(checkResult(player1, value));
      setPlayer1(null);
      setPlayer2(null);
    }
  }

  function checkResult(player1: string | null, player2: string | null): string {
    if (player1 === player2) {
      return "Draw!";
    }

    if (
      (player1 === Choice.Paper && player2 === Choice.Rock) ||
      (player1 === Choice.Scissors && player2 === Choice.Paper) ||
      (player1 === Choice.Rock && player2 === Choice.Scissors)
    ) {
      return "Player 1 won!";
    }

    return "Player 2 won!";
  }

  return (
    <>
      <p>{result ? "Play again :)" : ":)"}</p>
      <p>
        {!player1 && "First player!"}
        {!player2 && player1 && "Second player!"}
      </p>
      <button onClick={() => handlePlayerChoice(Choice.Paper)}>Paper</button>
      <button onClick={() => handlePlayerChoice(Choice.Scissors)}>Scissors</button>
      <button onClick={() => handlePlayerChoice(Choice.Rock)}>Rock</button>
      <p>{result}</p>
    </>
  );
}

export default App;
