import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOfferData } from '../../app/offer';
import { H1, H2 } from '../../components/common/headline/Headline';
import styles from './AddOffer.module.css';

import { ApartmentIcon, RoomIcon, HouseIcon, CommercialIcon, PlotIcon, Sell, Calendar, Clock } from '../../assets/Icons';


function AddOffer() {
    const offerData = useSelector(state => state.offerData);

    const [propertiesParams, setPropertiesParams] = useState([]);
    const [actionsParams, setActionsParams] = useState([]);
    const [activeAction, setActiveAction] = useState({ isActive: false, activeKey: '' })
    const [activeProperty, setActiveProperty] = useState({ isActive: false, activeKey: '' })

    const labels = {
        actions: [
            {
                title: 'Продать',
                type: 'sell',
                params: ['apartment', 'house', 'commercial', 'plot'],
                icon: <Sell />
            },
            {
                title: 'Сдать длительно',
                type: 'rent',
                params: ['apartment', 'room', 'house', 'commercial'],
                icon: <Calendar />
            },
            {
                title: 'Сдать посуточно',
                type: 'daily_rent',
                params: ['apartment', 'room', 'house'],
                icon: <Clock />
            }
        ],
        properties: [
            {
                title: 'Квартира',
                type: 'apartment',
                params: ['sell', 'rent', 'daily_rent'],
                icon: <ApartmentIcon />
            },
            {
                title: 'Комната',
                type: 'room',
                params: ['rent', 'daily_rent'],
                icon: <RoomIcon />
            },
            {
                title: 'Дом',
                type: 'house',
                params: ['sell', 'rent', 'daily_rent'],
                icon: <HouseIcon />
            },
            {
                title: 'Коммерческая',
                type: 'commercial',
                params: ['sell', 'rent'],
                icon: <CommercialIcon />
            },
            {
                title: 'Участок',
                type: 'plot',
                params: ['sell'],
                icon: <PlotIcon />
            }
        ]
    }

    return <div className={styles.add_offer_wrapper}>
        <H1 title={'Новое объявление'} />
        <LabelList labelType='action' labels={labels.actions} getState={actionsParams} setState={setPropertiesParams} active={activeAction} setActive={setActiveAction} linkedListState={activeProperty.isActive} />
        <H2 title={'Выберите тип недвижимости:'} />
        <LabelList labelType='property' labels={labels.properties} getState={propertiesParams} setState={setActionsParams} active={activeProperty} setActive={setActiveProperty} linkedListState={activeAction.isActive} />
    </div>
}

function LabelList({ labels, labelType, getState, setState, active, setActive, linkedListState }) {
    const dispatch = useDispatch();
    const offerData = useSelector(state => state.offerData);
    const newData = Object.assign({}, offerData.value);

    const activeClass = active.isActive ? styles.active_label_list : '';
    labels = (getState.length !== 0 && linkedListState) ? labels.filter(label => getState.includes(label.type)) : labels;

    function labelHandler(params, type) {
        setState(params);

        if (!active.isActive || active.activeKey !== type) {
            setActive({ isActive: true, activeKey: type });
            newData[labelType] = type;
        } else {
            setActive({ isActive: false, activeKey: '' });
            delete newData[labelType];
        }

        dispatch(setOfferData(newData));
    }

    return <div className={`${styles.label_list} ${activeClass}`}>
        {labels.map(label => {
            return <Label title={label.title} active={active.activeKey === label.type} icon={label.icon} func={() => labelHandler(label.params, label.type)} key={label.type} />
        })}
    </div>
}

function Label({ title, icon, func, active }) {
    const activeClass = active ? styles.active_label : '';

    return <div className={`${styles.label} ${activeClass}`} onClick={() => func()}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
    </div>
}

export default AddOffer;