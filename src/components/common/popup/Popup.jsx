import React from 'react';
import { CloseBtnIcon } from '../../../assets/Icons';
import { useDispatch } from 'react-redux';
import { close } from '../../../app/popup';
import './popup.css';

export default function Popup(props) {
    const dispatch = useDispatch();

    return <div className={`popup ${props.clName}`} onClick={() => dispatch(close())}>
        <div className={'popup_frame'} onClick={(e) => e.stopPropagation()}>
            <CloseBtnIcon closeFn={() => dispatch(close())} color='#000' />
            {props.children}
        </div>
    </div>
}