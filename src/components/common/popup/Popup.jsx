import React from 'react';
import { CloseBtnIcon } from '../../../assets/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../../../app/popup';
import Form from '../form/Form';
import Headline from '../headline/Headline';
import './popup.css';

export default function Popup({ clName }) {
    const formName = useSelector(state => state.formContainer)
    const dispatch = useDispatch();

    return <div className={`popup ${clName}`} onClick={() => dispatch(closePopup())}>
        <div className={'popup_frame'} onClick={(e) => e.stopPropagation()}>
            <CloseBtnIcon closeFn={() => dispatch(closePopup())} color='#000' />
            <Headline title={formName.name} />
            <Form />
        </div>
    </div>
}