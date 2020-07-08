import styles from './Button.module.css';
import {FiArrowRight} from 'react-icons/fi';

export default function Button({title, onClick}) {
  return (
    <div className={styles.button} role="button" onClick={onClick}>
      <span>
        <div className={styles.buttonContainer}>
          <span>{title}</span>
          <FiArrowRight/>
        </div>
      </span>
    </div>
  );
}