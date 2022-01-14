import React from 'react';
import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

import { useDispatch } from 'react-redux';
import { openPopup } from '../../../app/popup';
import { signInType, signUpType } from '../../../app/form';

import styles from './TopHeader.module.css';


function TopHeader() {
    return (
        <div className={styles.top_header}>
            <Logo />
            <UserMenu />
        </div>
    );
}


function UserMenu() {
    const dispatch = useDispatch();

    function signIn() {
        dispatch(openPopup());
        dispatch(signInType());
    }

    function signUp() {
        dispatch(openPopup());
        dispatch(signUpType());
    }

    return (
        <div className={styles.user_menu}>
            <Button title={'Вход'} fSize='17px' func={(signIn)} />
            <Button title={'Регистрация'} fSize='17px' func={(signUp)} />
        </div>
    );
}

export default TopHeader;