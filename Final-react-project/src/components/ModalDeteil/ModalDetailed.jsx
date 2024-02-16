import React from 'react';
import { Img } from '../Img';
import styles from './ModalDetailed.module.css';

export const ModalDetailed = ({ isActive, data, onClose }) => {
    if (!isActive) return null;

    const renderSpecifications = (specifications) => {
        if (!specifications || typeof specifications !== 'object') {
            return <ul>
                <li>
                    <p>Підтримка Smart TV: з Smart TV</p>
                    <p> Роздільна здатність: 3840x2160 </p>
                    <p>Частота оновлення: 120 Гц</p>
                    <p>Країна-виробник: Китай</p>
                    <p>Тип матриці: VA</p>
                    <p>Додаткові характеристики: TCL Mini LED, Dolby Vision, Dolby Vision IQ, HDR, HDR HLG, HDR10+</p>
                </li>
            </ul>;
        }

        return Object.entries(specifications).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
        ));
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <img src="./img/products/close.png" alt="close" />
                </button>
                <div className={styles.content}>
                    <Img  alt={data.title} className={styles.image} />
                    <h4>{data.title}</h4>
                    <ul>
                        {renderSpecifications(data.specifications)}
                    </ul>
                </div>
            </div>
        </div>
    );
};
