import React from 'react';
import styles from './Headline.module.css';

export default function Headline({ title }) {
    return <h1 className={styles.headline}>{title}</h1>
}