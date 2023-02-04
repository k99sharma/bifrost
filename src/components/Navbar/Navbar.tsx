// importing libraries
import { Link } from "react-router-dom";

// importing custom component
import Banner from "../Banner/Banner";

// navbar component
export default function Navbar() {
  return (
    <div className="navbar px-5 py-5">
      <Link to="/">
        <div className="navbar-logo flex items-center">
          <Banner height={40} width={40} />
          <div className="text-white mx-2">Bifrost</div>
        </div>
      </Link>
    </div>
  );
}
