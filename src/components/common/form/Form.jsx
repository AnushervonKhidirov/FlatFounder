import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../app/signIn';
import { closePopup } from '../../../app/popup';
import Input from '../input/Input';
import Button from '../button/Button';
import styles from './Form.module.css';

function Form() {
    const formContainer = useSelector((state) => state.formContainer);
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch();

    function readData(e) {
        const newData = Object.assign({}, formData);
        newData[e.target.name] = e.target.value;
        setFormData(newData)
    }

    function submitForm(e) {
        e.preventDefault();

        if (formContainer.type === 'signUp' && formData.password !== formData.repeatPassword) {
            alert('Пароли должны совпадать!');
            
        } else {
            console.log(JSON.stringify(formData));
            dispatch(signIn());
            dispatch(closePopup());
        }
    }

    return (
        <form className={styles.form} onSubmit={(e) => submitForm(e)}>
            {formContainer.currentStructure.map(item => {
                return <Input onChange={(e) => readData(e)}
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.name}
                    key={item.name} />
            })}

            <Button title='Отправить' />
        </form>
    );
}


export default Form;