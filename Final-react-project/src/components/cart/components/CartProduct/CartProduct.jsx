import React, { useState } from 'react';
import { Img } from '../../../commons';
import s from './CartProduct.module.css';
import cs from './../../components/CartCommon.module.css';

export const CartProduct = ({ qty, product, cost, index, onIncrease, onDecrease, onRemove }) => {
  const { id, img, price, title } = product;
  const [showInfo, setShowInfo] = useState(false);

  const getProductInfo = () => {
    switch (title) {
      case 'Ergo':
        return (
          <div className={s.productInfo}>
            <p>Screen diagonal: 65"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot</p>
            <p>Wireless capabilities: Bluetooth, WIFI</p>
          </div>
        );
      case 'Nokia':
        return (
          <div className={s.productInfo}>
            <p>Screen diagonal: 55"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot</p>
            <p>Wireless capabilities: Bluetooth, WIFI</p>
          </div>
        );
      case 'Samsung':
        return (
          <div className={s.productInfo}>
            <p>Series: Q6</p>
            <p>Screen diagonal: 55"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot</p>
            <p>Wireless capabilities: Bluetooth, WIFI</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={s.product}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <span className={`${s.number} ${cs.mr1} ${cs.number}`}>{index + 1}</span>

      <div className={`${s.imgContainer} ${cs.mr1}`}>
        <Img imgName={img} className={`${cs.img}`} />
      </div>

      <p className={`${s.name} ${cs.mr1} ${cs.name}`}>{title}</p>

      <div className={`${s.qty} ${cs.mr1} ${cs.qty}`}>
        <button onClick={() => onIncrease(id)}>+</button>
        <span>{qty}</span>
        <button onClick={() => onDecrease(id)}>-</button>
      </div>

      <span className={`${s.price} ${cs.mr1} ${cs.price}`}>{price}</span>
      <span className={`${s.cost} ${cs.cost}`}>{cost}</span>

      <button className={`${s.removeBtn} ${cs.removeBtn}`} onClick={() => onRemove(id)}>
      
      </button>

      {showInfo && <div className={s.customTooltip}>{getProductInfo()}</div>}
    </div>
  );
};
