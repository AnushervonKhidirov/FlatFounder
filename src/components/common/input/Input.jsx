import React from 'react';
import styles from './Input.module.css';

export default function Input({ type = 'text', name = '', placeholder = name, fSize, onChange }) {
    return <input onChange={onChange} className={styles.input} type={type} placeholder={placeholder} name={name} required style={{ fontSize: fSize }} />
}