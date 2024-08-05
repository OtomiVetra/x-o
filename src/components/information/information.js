import style from './information.module.css';
import PropTypes from 'prop-types';

export const Information = ({ isDraw, isGameEnded, currentPlayer, winner }) => {
	let status;
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded && winner) {
		status = `Победа: ${winner}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return <div className={style.Information}>{status}</div>;
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
};
