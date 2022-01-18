import React from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

// components
import Popup from './components/common/popup/Popup';
import Header from './containers/header/Header';
import MainContent from './containers/mainContent/MainContent';

function App() {
	const popup = useSelector((state) => state.popupHandler);

	return (
		<div id='wrapper'>
			<Transition in={popup.value} timeout={300} mountOnEnter unmountOnExit>
				{animationClass => <Popup clName={animationClass} />}
			</Transition>

			<Header />
			<MainContent />
		</div>
	);
}

export default App;
