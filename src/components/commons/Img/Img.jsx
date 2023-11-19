import styles from './Img.module.css';

export const Img = ({ imgName, className }) => {
  const { img } = styles;

  return (
    <div className={`${img}${className ? ' ' + className : ''}`}>
      <img src={process.env.PUBLIC_URL + `/img/products/${ imgName }`} alt="" />
    </div>
  );
};