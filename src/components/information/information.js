import React, { Component } from 'react';
import { connect } from 'react-redux';

class Information extends Component {
	render() {
		const { isGameEnded, winner, currentPlayer, isDraw } = this.props;

		let status;
		if (isDraw) {
			status = 'Ничья';
		} else if (isGameEnded && winner) {
			status = `Победа: ${winner}`;
		} else {
			status = `Ходит: ${currentPlayer}`;
		}

		return <div className='mt-4 text-xl font-semibold'>{status}</div>;
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	winner: state.winner,
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
