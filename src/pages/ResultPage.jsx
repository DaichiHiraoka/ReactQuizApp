import { Link } from "react-router-dom";
import { ROUTES } from '../const.js';
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctNumLen = location.state.correctNumLen;
  return (
    <div>
      <h1>Result </h1>
      <p>あなたの正解数は: {correctNumLen} / {maxQuizLen}</p>
      <Link to={ROUTES.TOP} >Topに戻る</Link>
    </div>
  );
}
