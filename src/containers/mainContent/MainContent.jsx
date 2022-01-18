import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Offers from '../../pages/offers/Offers';
// import './mainContent.css';

function MainContent() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/buy/' element={<Offers />} />
                <Route path='/rent/' element={<Offers />} />
                <Route path='/new_buildings/' element={<Offers />} />
                <Route path='/commercial/' element={<Offers />} />
                <Route path='/mortgage/' element={<Offers />} />
            </Routes>
        </main>
    );
}

export default MainContent;