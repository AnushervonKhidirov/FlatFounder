import React from 'react';
import TopHeader from '../../components/headerComponents/topHeader/TopHeader';
import NavigationHeader from '../../components/headerComponents/navigationHeader/NavigationHeader';

function Header() {
    return (
        <header>
            <div id="header_wrapper">
                <TopHeader />
                <NavigationHeader />
            </div>
        </header>
    );
}

export default Header;