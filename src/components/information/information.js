import style from './information.module.css';
import { store } from '../../store';

export const Information = () => {
	const { isGameEnded, winner, currentPlayer, isDraw } = store.getState();

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
