// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { WrapperContext } from './Context';
import Header from './containers/header/Header';
import Popup from './components/common/popup/Popup';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

function App() {
	const popup = useSelector((state) => state.popupHandler);

	return (
		<WrapperContext.Provider value={''}>
			<Transition in={popup.value} timeout={300} mountOnEnter unmountOnExit>
				{state => <Popup clName={state}></Popup>}
			</Transition>

			<Header />
		</WrapperContext.Provider>
	);
}

export default App;
