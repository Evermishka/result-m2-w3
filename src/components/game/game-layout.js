import { FieldContainer, InformationContainer } from '../../components';
import PropTypes from 'prop-types';
import styles from './game-layout.module.css';

export const GameLayout = ({
	field,
	currentPlayer,
	isGameEnded,
	isDraw,
	gameButtonClickHandler,
	resetButtonClickHandler,
}) => {
	return (
		<div className={styles.game}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer
				field={field}
				gameButtonClickHandler={gameButtonClickHandler}
				isGameEnded={isGameEnded}
			/>
			<button className={styles.reset} onClick={resetButtonClickHandler}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	gameButtonClickHandler: PropTypes.func,
	resetButtonClickHandler: PropTypes.func,
}