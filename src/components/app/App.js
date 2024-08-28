import React, { Component } from 'react';
import { connect } from 'react-redux';
import Information from '../information/information';
import Field from '../field/field';

class App extends Component {
	resetGame = () => {
		this.props.resetGame();
	};

	render() {
		return (
			<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
				<h1 className='text-3xl font-bold mb-8'>Крестики-нолики</h1>
				<Field />
				<Information />
				<button
					className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
					onClick={this.resetGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	resetGame: () => dispatch({ type: 'RESET_GAME' }),
});

export default connect(null, mapDispatchToProps)(App);
