import { Link } from "react-router-dom";

function Result() {
  return (
    <div>
      <h1>Result </h1>
      <Link to={ROUTES.TOP} target="_blank">Topに戻る</Link>
    </div>
  );
}

export default Result;