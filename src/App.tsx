import { useState } from 'react';
import './App.css';

function App() {
	const [player1, setPlayer1] = useState<string | null>(null);
	const [player2, setPlayer2] = useState<string | null>(null);

	function handlePlayerChoice(value: string): void {
		if (!player1) {
			setPlayer1(value);
		} else {
			setPlayer2(value);
			console.log(checkResult(player1, value));
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
			<h1>
				{!player1 && 'Pierwszy gracz wybiera!'}
				{!player2 && player1 && 'Drugi gracz wybiera!'}
			</h1>
			<button className='btn paper' onClick={() => handlePlayerChoice('paper')}>
				Paper
			</button>
			<button className='btn scissors' onClick={() => handlePlayerChoice('scissors')}>
				Scissors
			</button>
			<button className='btn rock' onClick={() => handlePlayerChoice('rock')}>
				Rock
			</button>
		</>
	);
}

export default App;
