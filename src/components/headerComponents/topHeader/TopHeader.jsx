import React from 'react';
import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

function TopHeader() {
    return (
        <div className="top_header">
            <Logo />
            <UserMenu />
        </div>
    );
}


function UserMenu() {
    return (
        <div className="user_menu">
            <Button title={'Войти'} />
        </div>
    );
}

export default TopHeader;