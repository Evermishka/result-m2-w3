import { GameLayout } from './game-layout';
import { useState } from 'react';
import { FIELD, WIN_PATTERNS } from '../../consts';

const checkIsGameEnded = (currentField) =>
	WIN_PATTERNS.some(
		(el) =>
			currentField[el[0]] !== '' &&
			currentField[el[0]] === currentField[el[1]] &&
			currentField[el[0]] === currentField[el[2]],
	);

const checkIsDraw = (currentField) => !currentField.some((ceil) => ceil === '');

export const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(FIELD);
	const [isDraw, setIsDraw] = useState(false);
	const [isGameEnded, setIsGameEnded] = useState(false);

	const gameButtonClickHandler = (index) => {
		const currentField = field.map((el, i) => (index === i ? currentPlayer : el));
		setField(currentField);

		const isGameEndedTurn = checkIsGameEnded(currentField);
		if (isGameEndedTurn) setIsGameEnded(true);

		const isDrawTurn = checkIsDraw(currentField) && !isGameEndedTurn;
		if (isDrawTurn) setIsDraw(true);

		if (!isGameEndedTurn && !isDrawTurn) {
			setCurrentPlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));
		};
	};

	const resetButtonClickHandler = () => {
		setCurrentPlayer('X');
		setField(FIELD);
		setIsDraw(false);
		setIsGameEnded(false);
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
