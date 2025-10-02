import styles from './Result.module.css';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

export default function Result({ maxQuizLen, correctNumLen }) {
  const { width, height } = useWindowSize();

  return (
    <>
    <div className={styles.result}>
      <h1>Result </h1>
      <p>あなたの正解数は: {correctNumLen} / {maxQuizLen}</p>
    </div>
    <Confetti
      width={width}
      height={height}
    />
    </>
  );
}