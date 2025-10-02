import styles from './Result.module.css';
import Confetti from 'react-confetti';


export default function Result({ maxQuizLen, correctNumLen }) {

  return (
    <>
    
    <div className={styles.result}>
      <h1>Result </h1>
      <p>あなたの正解数は: {correctNumLen} / {maxQuizLen}</p>
    </div>
    <Confetti/>
    </>
  );
}