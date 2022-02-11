import React, { useState } from 'react';

export default function Input({ id, type = 'text', inputValue, name = '', placeholder = name, fSize, onChange, onBlur }) {
    const [value, setValue] = useState('');

    function onChangeInput(value) {
        onChange ? onChange(value) : setValue(value);
    }

    return <input id={id ? id : null} onChange={(e) => onChangeInput(e.target.value)} value={inputValue ? inputValue : value} onBlur={onBlur} type={type} placeholder={placeholder} name={name} required style={{ fontSize: fSize }} />
}