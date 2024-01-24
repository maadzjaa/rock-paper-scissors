import { useState } from 'react';
import './App.css';

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

	function checkResult(player1: string | null, player2: string | null) {
		if (player1 === player2) {
			return 'Draw!';
		}

		if (player1 === 'paper' && player2 === 'rock') {
			return 'Player 1 won!';
		}
		if (player1 === 'scissors' && player2 === 'paper') {
			return 'Player 1 won!';
		}
		if (player1 === 'rock' && player2 === 'scissors') {
			return 'Player 1 won!';
		}

		return 'Player 2 won!';
	}

	return (
		<>
			<p>{result ? 'Play again :)' : ':)'}</p>
			<p>
				{!player1 && 'First player!'}
				{!player2 && player1 && 'Second player!'}
			</p>
			<button onClick={() => handlePlayerChoice('paper')}>Paper</button>
			<button onClick={() => handlePlayerChoice('scissors')}>Scissors</button>
			<button onClick={() => handlePlayerChoice('rock')}>Rock</button>
			<p>{result}</p>
		</>
	);
}

export default App;
