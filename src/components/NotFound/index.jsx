import { Link } from "react-router-dom";

// import notfound from "../assets/images/notfound.svg";

export default function NotFound() {
  return (
    <div className="row justify-content-center">
      <p className="text-center">
        <Link to="/" className="btn btn-primary">
          Go to homepage!
        </Link>
      </p>
    </div>
  );
}
