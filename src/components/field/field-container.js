import { FieldLayout } from './field-layout';
import PropTypes from 'prop-types';

export const FieldContainer = ({ field, isGameEnded, gameButtonClickHandler }) => {

	return <FieldLayout field={field} isGameEnded={isGameEnded} gameButtonClickHandler={gameButtonClickHandler} />;
};

FieldContainer.propTypes = {
	field: PropTypes.array,
	isGameEnded: PropTypes.bool,
	gameButtonClickHandler: PropTypes.func,
}