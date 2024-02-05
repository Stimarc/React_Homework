import commonStyles from './../CartCommon.module.css';

export const CartHeader = ({ ...props }) => {
    const { number, img, name, qty, price, cost, mr1 } = commonStyles;

    return (
        <div {...props}>
            <span className={`${number} ${mr1}`}>№</span>
            <span className={`${img} ${mr1}`}>Фото</span>
            <span className={`${name} ${mr1}`}>Назва</span>
            <span className={`${qty} ${mr1}`}>К-сть</span>
            <span className={`${price} ${mr1}`}>Ціна</span>
            <span className={`${cost}`}>Вартість</span>
        </div>
    );
};

