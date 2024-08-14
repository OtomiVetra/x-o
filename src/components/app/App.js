import { Information } from '../information/information';
import { Field } from '../field/field';
import style from './App.module.css';
import { useDispatch } from 'react-redux';

export const App = () => {
	const dispatch = useDispatch();

	const resetGame = () => {
		dispatch({ type: 'RESET_GAME' });
	};

	return (
		<div className={style.App}>
			<h1 className={style.title}>Крестики-нолики</h1>
			<Field />
			<Information />
			<button onClick={resetGame}>Начать заново</button>
		</div>
	);
};
