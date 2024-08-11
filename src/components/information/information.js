import style from './information.module.css';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	let status;
	if (state.isDraw) {
		status = 'Ничья';
	} else if (state.isGameEnded && state.winner) {
		status = `Победа: ${state.winner}`;
	} else {
		status = `Ходит: ${state.currentPlayer}`;
	}

	return <div className={style.Information}>{status}</div>;
};
