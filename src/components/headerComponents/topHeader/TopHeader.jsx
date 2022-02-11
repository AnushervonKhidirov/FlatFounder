import React from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openPopup } from '../../../app/popup';
import { signOut } from '../../../app/signIn';
import { signInForm, signUpForm } from '../../../app/form';

import Logo from '../../common/logo/Logo';
import Button from '../../common/button/Button';

import styles from './TopHeader.module.css';


function TopHeader() {
    return <div className={styles.top_header}>
        <Logo />
        <UserMenu />
    </div>
}

function UserMenu() {
    const isSignIn = useSelector(state => state.signInHandler.value);

    return <div className={styles.user_menu}>
        {isSignIn ? <AuthorizedUserMenu /> : <UnauthorizedUserMenu />}
    </div>
}

function AuthorizedUserMenu() {
    const dispatch = useDispatch();

    function signOutHandler() {
        dispatch(signOut());
    }

    return <>
        <NavLink to='/add_offer'><Button title={'Добавить объявление'} fSize='17px' /></NavLink>
        <Button title={'Выход'} fSize='17px' func={signOutHandler} />
    </>
}

function UnauthorizedUserMenu() {
    const dispatch = useDispatch();

    function signInHandler() {
        dispatch(openPopup());
        dispatch(signInForm());
    }

    function signUpHandler() {
        dispatch(openPopup());
        dispatch(signUpForm());
    }

    return <>
        <Button title={'Вход'} style={{fontSize: '17px'}} func={(signInHandler)} />
        <Button title={'Регистрация'} style={{fontSize: '17px'}} func={(signUpHandler)} />
    </>
}

export default TopHeader;