import { createStore } from 'redux';

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(''),
	winner: null,
};

const RESET_GAME = 'RESET_GAME';
const MAKE_MOVE = 'MAKE_MOVE';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_GAME:
			return initialState;
		case MAKE_MOVE:
			const newField = state.field.slice();
			newField[action.payload.index] = action.payload.player;
			const isGameEnded =
				checkWin(newField, action.payload.player) ||
				newField.every((cell) => cell !== '');
			const isDraw =
				!checkWin(newField, action.payload.player) &&
				newField.every((cell) => cell !== '');

			return {
				...state,
				field: newField,
				currentPlayer: action.payload.player === 'X' ? '0' : 'X',
				isGameEnded: isGameEnded,
				isDraw: isDraw,
				winner: checkWin(newField, action.payload.player) ? action.payload.player : null,
			};
		default:
			return state;
	}
};

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const checkWin = (field, player) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((index) => field[index] === player),
	);
};

export const store = createStore(reducer);
