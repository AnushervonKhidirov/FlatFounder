import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Offers from '../../pages/offers/Offers';
import styles from './MainContent.module.css';

// images
import apartment from '../../assets/images/apartment.jpg';
import commercial from '../../assets/images/commercial.jpg';
import homepage from '../../assets/images/homepage.jpg';
import house from '../../assets/images/house.jpg';
import plot from '../../assets/images/plot.jpg';
import room from '../../assets/images/room.jpg';

function MainContent() {
    return (
        <main>
            <MainContentSlide />
            <div id="main_wrapper">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/offers' element={<Offers />} />
                </Routes>
            </div>
        </main>
    );
}

function MainContentSlide() {
    let [search] = useSearchParams();

    const slides = {
        'apartment': {
            title: 'Квартиры',
            img: apartment
        },
        'house': {
            title: 'Дома',
            img: house
        },
        'room': {
            title: 'Комнаты',
            img: room
        },
        'commercial': {
            title: 'Коммерческая недвижимость',
            img: commercial
        },
        'plot': {
            title: 'Участки',
            img: plot
        }
    }

    function setSlideImage() {
        return {
            title: slides[search.get('search')] ? slides[search.get('search')].title : null,
            img: slides[search.get('search')] ? slides[search.get('search')].img : homepage
        };
    }

    return <div className={styles.content_slide}>
        <div
            className={styles.content_slide_img}
            style={{ backgroundImage: `url(${setSlideImage().img})` }} />
        {setSlideImage().title ? <div className={styles.slide_title}>{setSlideImage().title}</div> : null}
    </div>
}

export default MainContent;