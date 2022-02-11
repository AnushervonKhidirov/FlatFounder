import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData } from '../../../app/offer';
import Input from '../../common/input/Input';
import styles from './OfferFormRow.module.css';

function OfferFormRow({ title, propertyKey, valueItems, isInput }) {
    const formData = useSelector(state => state.offerData);
    const dispatch = useDispatch();

    function labelHandler(label) {
        const newData = Object.assign({}, formData.value.form);
        const isInput = label !== null && typeof label === 'object' && label.target.nodeName.toLowerCase() === 'input';

        if (isInput) {
            newData[propertyKey] = label.target.value === '' ? null : label.target.value;
        } else {
            newData[propertyKey] = newData[propertyKey] === label ? null : label;
        }

        dispatch(setFormData(newData));
    }

    return <div className={`${styles.form_row} ${formData.value.form[propertyKey] ? styles.chosen : null}`}>
        <div className={styles.form_row_title}>{title}</div>
        <div className={styles.form_row_value}>
            {valueItems.map(label => <FormLabel title={label.title} labelKey={label.key} chosenLabel={formData.value.form[propertyKey]} isInput={isInput} type={label.type} key={label.key} handler={labelHandler} />)}
        </div>
    </div>
}


function FormLabel({ title, labelKey, chosenLabel, handler, isInput, type }) {
    const [inputValue, setInputValue] = useState('');

    function checkEnterValue(value) {
        if (type === 'number') setInputValue(value.match(/[0-9/.]/g) ? value.match(/[0-9/.]/g).join('') : null);
    }

    if (isInput) {
        return <Input inputValue={inputValue} name={labelKey} placeholder={title} onChange={checkEnterValue} onBlur={(e) => handler(e)} />;
    } else {
        return <div className={`${styles.form_label} ${title === chosenLabel ? styles.active : ''}`} onClick={() => handler(title)}>{title}</div>;
    }
}

export default OfferFormRow;