import React from 'react';
import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

import { useDispatch } from 'react-redux';
import { open } from '../../../app/popup';


function TopHeader() {
    return (
        <div className="top_header">
            <Logo />
            <UserMenu />
        </div>
    );
}


function UserMenu() {
    const dispatch = useDispatch();

    return (
        <div className="user_menu" onClick={() => dispatch(open())}>
            <Button title={'Войти'} />
        </div>
    );
}

export default TopHeader;