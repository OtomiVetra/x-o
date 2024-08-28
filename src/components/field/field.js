import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {
	handleClick = (index) => {
		const { field, currentPlayer, isGameEnded, makeMove } = this.props;

		if (field[index] !== '' || isGameEnded) {
			return;
		}

		makeMove(index, currentPlayer);
	};

	getCellStyle = (cell) => {
		if (cell === 'X') {
			return 'text-red-500';
		} else if (cell === '0') {
			return 'text-blue-500';
		}
		return '';
	};

	render() {
		const { field } = this.props;

		return (
			<div className='grid grid-cols-3 gap-4'>
				{field.map((cell, index) => (
					<button
						key={index}
						className={`w-16 h-16 flex items-center justify-center text-2xl font-bold border ${this.getCellStyle(cell)}`}
						onClick={() => this.handleClick(index)}
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = (dispatch) => ({
	makeMove: (index, player) =>
		dispatch({
			type: 'MAKE_MOVE',
			payload: { index, player },
		}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
