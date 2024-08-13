import style from './field.module.css';
import { store } from '../../store';

export const Field = () => {
	const { field, currentPlayer, isGameEnded } = store.getState();

	const handleClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}

		store.dispatch({
			type: 'MAKE_MOVE',
			payload: { index, player: currentPlayer },
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
			{field.map((cell, index) => (
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
