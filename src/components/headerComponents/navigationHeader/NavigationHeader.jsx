import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';
import styles from './NavigationHeader.module.css';

function NavigationHeader() {
    const navigation = [
        {
            name: 'Купить',
            page: 'buy',
            subMenu: [],
        },
        {
            name: 'Снять',
            page: 'rent',
            subMenu: [],
        },
        {
            name: 'Новостройки',
            page: 'new_buildings',
            subMenu: [],
        },
        {
            name: 'Коммерческая',
            page: 'commercial',
            subMenu: [],
        },
        {
            name: 'Ипотека',
            page: 'mortgage',
            subMenu: [],
        },
    ]

    return (
        <nav className={styles.menu_navigation}>
            {navigation.map(navItem => {
                return <NavLink
                    to={`/${navItem.page}`}
                    className={styles.navigation_item}
                    key={navItem.page}>
                    {navItem.name}
                </NavLink>
            })}
        </nav>
    );
}


export default NavigationHeader;