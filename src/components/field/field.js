import style from './field.module.css';
import PropTypes from 'prop-types';
const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // вертикали
	[0, 4, 8],
	[2, 4, 6], // диагонали
];

export const Field = ({
	field,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	setField,
}) => {
	const handleClick = (index) => {
		if (field[index] !== '' || isGameEnded) {
			return;
		}

		const newField = field.slice();
		newField[index] = currentPlayer;
		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setIsGameEnded(true);
		} else if (newField.every((cell) => cell !== '')) {
			setIsGameEnded(true);
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const checkWin = (field, player) => {
		return WIN_PATTERNS.some((pattern) =>
			pattern.every((index) => field[index] === player),
		);
	};

	const getCellStyle = (cell) => {
		if (cell === 'X') {
			return { color: 'red' };
		} else if (cell === '0') {
			return { color: 'blue' };
		}
		return {}; // default style
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

Field.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.string,
	setIsDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.bool,
	field: PropTypes.array,
	setField: PropTypes.array,
};
