import { Link} from "react-router-dom";
import { ROUTES } from "../const.js";

export default function TopPage() {
  return (
    <div>
      <h1>Quiz App</h1>
      <Link to={ROUTES.QUESTION} >クイズに挑戦する</Link>
    </div>
  );
}

