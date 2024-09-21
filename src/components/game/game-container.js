import { GameLayout } from './game-layout';
import { useState, useEffect } from 'react';
import { FIELD, WIN_PATTERNS } from '../../consts';

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(FIELD);

	const isDraw = !field.some((ceil) => ceil === '');

	const isGameEnded = WIN_PATTERNS.some(
		(el) =>
			field[el[0]] !== '' &&
			field[el[0]] === field[el[1]] &&
			field[el[0]] === field[el[2]],
	);

	useEffect(() => {
		if (!isGameEnded && !field.every((ceil) => ceil === '')) {
			setCurrentPlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
		}
	}, [field, isGameEnded]);

	const gameButtonClickHandler = (index) => {
		setField(field.map((el, i) => (index === i ? currentPlayer : el)));
	};

	const resetButtonClickHandler = () => {
		setCurrentPlayer('X');
		setField(FIELD);
	};

	return (
		<GameLayout
			field={field}
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			gameButtonClickHandler={gameButtonClickHandler}
			resetButtonClickHandler={resetButtonClickHandler}
		/>
	);
};
