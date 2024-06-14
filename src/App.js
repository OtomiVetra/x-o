import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent';
import React from 'react';
const x = 20;

export const App = () => {
	const currentDate = new Date().toLocaleDateString();
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
					<p>{currentDate}</p>
				</a>
				<MyComponent />
			</header>
		</div>
	);
};
