import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';

// components
import Popup from './components/common/popup/Popup';
import Header from './containers/header/Header';
import MainContent from './containers/mainContent/MainContent';

function App() {
	const popup = useSelector((state) => state.popupHandler);

	useEffect(() => setBodyScrolling());
	
	function setBodyScrolling() {
		popup.value ? document.body.classList.add('scroll_disabled') : document.body.classList.remove('scroll_disabled');
	}

	return (
		<div id='wrapper'>
			<Transition in={popup.value} timeout={{appear: 300, enter: 0, exit: 300}} mountOnEnter unmountOnExit>
				{animationClass => <Popup clName={animationClass} />}
			</Transition>

			<Header />
			<MainContent />
		</div>
	);
}

export default App;
