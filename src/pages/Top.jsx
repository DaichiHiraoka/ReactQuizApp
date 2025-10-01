import { Link, Route } from "react-router-dom";

function Top() {
  return (
    <div>
      <h1>Top </h1>
      <Link to={ROUTES.QUESTION} >クイズに挑戦する</Link>
    </div>
  );
}

export default Top;