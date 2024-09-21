import styles from './field-layout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, isGameEnded, gameButtonClickHandler }) => {
	return (
		<ul className={styles.field}>
			{field.map((ceil, i) => (
				<li className={styles.ceil} key={i}>
					<button
						className={styles.button}
						onClick={() => gameButtonClickHandler(i)}
						disabled={ceil !== '' || isGameEnded}
					>
						{ceil}
					</button>
				</li>
			))}
		</ul>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	gameButtonClickHandler: PropTypes.func,
}