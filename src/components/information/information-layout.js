import styles from './information-layout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<>
			{isDraw && <p className={styles.info}>Ничья</p>}
			{!isDraw && isGameEnded && (
				<p className={styles.info}>Победа: {currentPlayer}</p>
			)}
			{!isDraw && !isGameEnded && (
				<p className={styles.info}>Ходит: {currentPlayer}</p>
			)}
		</>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
}