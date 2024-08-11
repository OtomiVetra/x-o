import style from './field.module.css';
import { store } from '../../store';
import { useEffect, useState } from 'react';

export const Field = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const handleClick = (index) => {
		if (state.field[index] !== '' || state.isGameEnded) {
			return;
		}

		store.dispatch({
			type: 'MAKE_MOVE',
			payload: { index, player: state.currentPlayer },
		});
	};

	const getCellStyle = (cell) => {
		if (cell === 'X') {
			return { color: 'red' };
		} else if (cell === '0') {
			return { color: 'blue' };
		}
		return {};
	};

	return (
		<div className={style.Field}>
			{state.field.map((cell, index) => (
				<button
					key={index}
					className={style.cell}
					onClick={() => handleClick(index)}
					style={getCellStyle(cell)}
				>
					{cell}
				</button>
			))}
		</div>
	);
};
