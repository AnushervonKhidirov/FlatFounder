import React from 'react';
import styles from './Button.module.css';

export default function Button({ title, func, style }) {
    return <button className={styles.button} style={style} onClick={func}>{title}</button>
}