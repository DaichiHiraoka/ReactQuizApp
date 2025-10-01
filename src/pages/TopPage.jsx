import { Link} from "react-router-dom";
import { ROUTES } from "../const.js";

export default function Top() {
  return (
    <div>
      <h1>Top </h1>
      <Link to={ROUTES.QUESTION} >クイズに挑戦する</Link>
    </div>
  );
}

