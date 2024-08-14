import style from './information.module.css';
import { useSelector } from 'react-redux';

export const Information = () => {
	const { isGameEnded, winner, currentPlayer, isDraw } = useSelector((state) => state);

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
