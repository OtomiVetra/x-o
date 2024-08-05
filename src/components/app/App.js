import { Information } from '../information/information';
import { Field } from '../field/field';
import { useEffect, useState } from 'react';
import style from './App.module.css';
import { store } from '../../store';

export const App = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const resetGame = () => {
		store.dispatch({ type: 'RESET_GAME' });
	};

	return (
		<div className={style.App}>
			<h1 className={style.title}>Крестики-нолики</h1>
			<Field
				field={state.field}
				currentPlayer={state.currentPlayer}
				isGameEnded={state.isGameEnded}
			/>
			<Information
				isDraw={state.isDraw}
				isGameEnded={state.isGameEnded}
				currentPlayer={state.currentPlayer}
				winner={state.winner}
			/>
			<button onClick={resetGame}>Начать заново</button>
		</div>
	);
};
