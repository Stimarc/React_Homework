import styles from './Logo.module.css';
import img from './logo.png';

export const Logo = () => {
  const { logo } = styles;

  return (
    <div className={ logo }>
      <img src={ img } alt="logo img stimshop" />
      <span>STIMSHOP</span>
    </div>
  );
};