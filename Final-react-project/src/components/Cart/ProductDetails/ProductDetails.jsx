import React, { useState } from 'react';
import { Img } from '../../Img';
import s from './ProductDetails.module.css';
import cs from './../CartCommon.module.css';

export const ProductDetails = ({ qty, product, cost, index, onIncrease, onDecrease, onRemove }) => {
  const { id, img, price, title } = product;
  const [showInfo, setShowInfo] = useState(false);

  const getProductInfo = () => {
    switch (title) {
      case 'TCL':
        return (
          <div className={s.productInfo}>
            <p>Screen diagonal: 98"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot 120Гц</p>
            <p>Wireless capabilities: Bluetooth, WIFI</p>
          </div>
        );
      case 'Samsung':
        return (
          <div className={s.productInfo}>
            <p>Screen diagonal: 98"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot 100Гц</p>
            <p>Wireless capabilities: Bluetooth, WIFI</p>
          </div>
        );
      case 'Sony':
        return (
          <div className={s.productInfo}>
            <p>Series: XR-77A80J</p>
            <p>Screen diagonal: 77"</p>
            <p>Smart TV support: with Smart TV</p>
            <p>Permission: 3840x2160</p>
            <p>TV type: QLED/Quantum Dot 120 Гц (CMR)</p>
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
