import React, { useState } from 'react';
import styles from './AuthModal.module.css';

export const AuthModal = ({ isOpen, onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setErrors({});
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (isLoginView) {
      if (!login) {
        formIsValid = false;
        newErrors['login'] = 'Будь ласка, введіть логін.';
      }

      if (!password) {
        formIsValid = false;
        newErrors['password'] = 'Будь ласка, введіть пароль.';
      } else if (password.length < 6) {
        formIsValid = false;
        newErrors['password'] = 'Пароль повинен містити мінімум 6 символів.';
      }
    } else {
      if (!username) {
        formIsValid = false;
        newErrors['username'] = "Будь ласка, введіть ім'я користувача.";
      }

      if (!email) {
        formIsValid = false;
        newErrors['email'] = 'Будь ласка, введіть електронну пошту.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        formIsValid = false;
        newErrors['email'] = 'Введіть коректну електронну пошту.';
      }

      if (!password) {
        formIsValid = false;
        newErrors['newPassword'] = 'Будь ласка, введіть пароль.';
      } else if (password.length < 6) {
        formIsValid = false;
        newErrors['newPassword'] = 'Пароль повинен містити мінімум 6 символів.';
      }

      if (!confirmPassword) {
        formIsValid = false;
        newErrors['confirmPassword'] = 'Будь ласка, підтвердіть пароль.';
      } else if (password !== confirmPassword) {
        formIsValid = false;
        newErrors['confirmPassword'] = 'Паролі не співпадають.';
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Форма відправлена');
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <img src="./img/products/close.png" alt="close" />
        </button>
        <form onSubmit={handleSubmit}>
          {isLoginView ? (
            <>
              <div className={styles.formGroup}>
                <label htmlFor="login">Логін</label>
                <input
                  className={styles.input}
                  type="text"
                  id="login"
                  placeholder="Логін"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                {errors.login && <div className={styles.error}>{errors.login}</div>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className={styles.error}>{errors.password}</div>}
              </div>
            </>
          ) : (
            <>
              <div className={styles.formGroup}>
                <label htmlFor="username">Ім'я користувача</label>
                <input
                  className={styles.input}
                  type="text"
                  id="username"
                  placeholder="Ім'я користувача"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <div className={styles.error}>{errors.username}</div>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Електронна пошта</label>
                <input
                  className={styles.input}
                  type="email"
                  id="email"
                  placeholder="Електронна пошта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className={styles.error}>{errors.email}</div>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="new-password">Пароль</label>
                <input
                  className={styles.input}
                  type="password"
                  id="new-password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.newPassword && <div className={styles.error}>{errors.newPassword}</div>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="confirm-password">Підтвердження пароля</label>
                <input
                  className={styles.input}
                  type="password"
                  id="confirm-password"
                  placeholder="Підтвердження пароля"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && (
                  <div className={styles.error}>{errors.confirmPassword}</div>
                )}
              </div>
            </>
          )}
          <div className={styles.formGroup}>
            <button className={styles.submitButton} type="submit">
              {isLoginView ? 'Увійти' : 'Зареєструватися'}
            </button>
          </div>
        </form>
        <div className={styles.toggleView}>
          <button onClick={toggleView}>
            {isLoginView ? 'Немає аккаунта? Реєструйся тут' : 'Вже є аккаунт? Увійди тут'}
          </button>
        </div>
      </div>
    </div>
  );
};
