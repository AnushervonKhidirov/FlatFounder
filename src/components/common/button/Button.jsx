import React from 'react';
import styles from './Button.module.css';

export default function Button({ title, fSize, func }) {
    return <button className={styles.button} style={{fontSize: fSize}} onClick={func}>{title}</button>
}