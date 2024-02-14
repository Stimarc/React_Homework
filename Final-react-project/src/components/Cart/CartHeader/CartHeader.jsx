import React from 'react';
import commonStyles from './../CartCommon.module.css';

export const CartHeader = ({ setIsCartOpen, ...props }) => {
    const { number, img, name, qty, price, cost, mr1 } = commonStyles;
    const buttonCloseStyle = {
        position: 'absolute', 
        top: '-32px', 
        right: '-32px', 
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
    };
    const closeImageStyle = {
        width: '30px',
        height: '30px',
    };

    return (
        <div {...props}>
            <span className={`${number} ${mr1}`}>№</span>
            <span className={`${img} ${mr1}`}>Фото</span>
            <span className={`${name} ${mr1}`}>Назва</span>
            <span className={`${qty} ${mr1}`}>К-сть</span>
            <span className={`${price} ${mr1}`}>Ціна</span>
            <span className={`${cost}`}>Вартість</span>
            <button 
                style={buttonCloseStyle} 
                onClick={() => setIsCartOpen(false)}
            >
                <img 
                    src="./img/products/close.png" 
                    alt="close" 
                    style={closeImageStyle}
                />
            </button>
        </div>
    );
};
