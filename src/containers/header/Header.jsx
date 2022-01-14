import React from 'react';
import TopHeader from '../../components/headerComponents/topHeader/TopHeader'

import styles from './Header.module.css';

function Header() {
    return (
        <header id={styles.header}>
            <TopHeader />
        </header>
    );
}

export default Header;