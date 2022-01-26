import React from 'react';
import styles from './Headline.module.css';

function H1({ title }) {
    return <h1 className={styles.headline}>{title}</h1>
}

function H2({ title }) {
    return <h2 className={styles.headline}>{title}</h2>
}

export { H1, H2 }