import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../../app/offer';
import OfferFormRow from '../offerFormRow/OfferFormRow';
import { H2 } from '../../common/headline/Headline';
import Button from '../../common/button/Button';
import SearchAddress from '../searchAddress/SearchAddress';
import styles from './OfferForm.module.css';

// import { YMaps, Map, SearchControl, Clusterer } from 'react-yandex-maps';


function OfferForm({ propertyTitle, propertyType }) {
    const formData = useSelector(state => state.offerData.value.form);
    
    function checkOutForm(obj) {
        for (const key in obj) {
            const isObject = obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key]);
            
            if (isObject) checkOutForm(obj[key]);
            if (obj[key] === null) return false;
        }

        return true;
    }

    function sendForm() {
        if (!checkOutForm(formData)) {
            alert('Заполните все поля правильно');
        } else {
            alert('Объявление добавлено');
        }
    }

    return <div>
        <OfferFormBlock>
            <H2 title='Адрес' />
            <SearchAddress />
        </OfferFormBlock>

        <OfferFormBlock>
            <H2 title={propertyTitle} />
            {propertyType.map(property => <OfferFormRow title={property.title} propertyKey={property.key} isInput={property.input} key={property.key} valueItems={property.valueItems} />)}
        </OfferFormBlock>

        <OfferFormBlock>
            <H2 title='Описание объявления' />
            <OfferDescription />
        </OfferFormBlock>

        <OfferFormBlock style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2em' }}>
            <Button title='Добавить объявление' style={{ fontSize: '18px' }} func={sendForm} />
        </OfferFormBlock>
    </div>
}


function OfferFormBlock(props) {
    return <div className={styles.form_block} style={props.style}>{props.children}</div>
}

function OfferDescription() {
    const formData = useSelector(state => state.offerData);
    const dispatch = useDispatch();

    function descHandler(value) {
        const newData = Object.assign({}, formData.value.form);
        value = value.replace(/\s+/g, ' ').replace(/^\s+|\s+$/gm, '');
        value === '' ? newData.description = null : newData.description = value;
        dispatch(setFormData(newData));
    }

    return <textarea className={styles.textarea} placeholder='Введите описание' onBlur={(e) => descHandler(e.target.value)} style={{ height: '10em' }}></textarea>
}

export default OfferForm;