import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOfferData, setFormData, setFormDataDefault } from '../../app/offer';
import { H1, H2 } from '../../components/common/headline/Headline';
import { ApartmentIcon, RoomIcon, HouseIcon, CommercialIcon, PlotIcon, SellIcon, CalendarIcon, ClockIcon } from '../../assets/Icons';
import { apartmentForm, roomForm, houseForm, commercialForm, plotForm } from './formContractureForm';
import OfferForm from '../../components/addOfferComponents/offerForm/OfferForm';
import styles from './AddOffer.module.css';

function AddOffer() {
    const offerData = useSelector(state => state.offerData);
    const [listParams, setListParams] = useState({ action: [], property: [] });
    const dispatch = useDispatch();

    const formData = {
        apartment: {
            title: 'О квартире',
            form: apartmentForm
        },
        room: {
            title: 'О комнате',
            form: roomForm
        },
        house: {
            title: 'О доме',
            form: houseForm
        },
        commercial: {
            title: 'О коммерческой недвижимости',
            form: commercialForm
        },
        plot: {
            title: 'Об участке',
            form: plotForm
        }
    }

    const labels = {
        actions: [
            {
                title: 'Продать',
                type: 'sell',
                params: ['apartment', 'house', 'commercial', 'plot'],
                icon: <SellIcon />
            },
            {
                title: 'Сдать длительно',
                type: 'rent',
                params: ['apartment', 'room', 'house', 'commercial'],
                icon: <CalendarIcon />
            },
            {
                title: 'Сдать посуточно',
                type: 'daily_rent',
                params: ['apartment', 'room', 'house'],
                icon: <ClockIcon />
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

    useEffect(() => setForm(), [listParams]);

    function setForm() {
        if (!offerData.value.action || !offerData.value.property) return;

        const newData = Object.assign({}, offerData.value.form);
        formData[offerData.value.property].form.forEach(property => {
            newData[property.key] = null
        });

        dispatch(setFormData(newData));
    }

    return <div className={styles.add_offer_wrapper}>
        <H1 title={'Новое объявление'} />
        <LabelList labelType='action' labels={labels.actions} getListParam={listParams} setListParams={setListParams} linkedListState={offerData.value.property} />
        <H2 title={'Выберите тип недвижимости:'} />
        <LabelList labelType='property' labels={labels.properties} getListParam={listParams} setListParams={setListParams} linkedListState={offerData.value.action} />

        {offerData.value.action && offerData.value.property ? <OfferForm propertyTitle={formData[offerData.value.property].title} propertyType={formData[offerData.value.property].form} /> : null}
    </div>
}

function LabelList({ labels, labelType, getListParam, setListParams, linkedListState }) {
    const offerData = useSelector(state => state.offerData);
    const dispatch = useDispatch();
    const activeClass = offerData.value[labelType] ? styles.active_label_list : '';
    const visibleLabels = getListParam[labelType].length !== 0 && linkedListState ? labels.filter(label => getListParam[labelType].includes(label.type)) : labels;

    function labelHandler(params, type) {
        const newData = Object.assign({}, offerData.value);
        const newListParams = Object.assign({}, getListParam);
        offerData.value[labelType] === type ? newData[labelType] = null : newData[labelType] = type;

        if (labelType === 'property') newListParams.action = params;
        if (labelType === 'action') newListParams.property = params;

        setListParams(newListParams);
        dispatch(setOfferData(newData));
        dispatch(setFormDataDefault());
    }

    return <div className={`${styles.label_list} ${activeClass}`}>
        {visibleLabels.map(label => {
            return <Label title={label.title} active={offerData.value[labelType] === label.type} icon={label.icon} func={() => labelHandler(label.params, label.type)} key={label.type} />
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