import { useState } from 'react';
import './App.css';

function App() {
	const [player1, setPlayer1] = useState('');
	const [player2, setPlayer2] = useState('');

	function handlePlayerChoice(value: string): void {
		if (player1 === '') {
			setPlayer1(value);
		} else {
			setPlayer2(value);
			console.log(checkResult(player1, value));
			setPlayer1('');
			setPlayer2('');
		}
	}

	function checkResult(player1: string, player2: string) {
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
				{player1 === '' && 'Pierwszy gracz wybiera!'}
				{player2 === '' && player1 !== '' && 'Drugi gracz wybiera!'}
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
