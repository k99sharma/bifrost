// importing libraries
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

// home component
export default function Home() {
  return (
    <div className="home grid md:grid-cols-2 p-10">
      <div className="home-content-mobile md:hidden flex flex-col items-center justify-center mb-10">
        <Typography className="home-content-heading" variant="h1">
          Bifrost
        </Typography>

        <div className="home-content-subheading text-center">
          Visualize and learn more about different countries using Bifrost 3D
          Globe
        </div>

        <div className="home-content-button my-10">
          <Link
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg"
            to="/dashboard"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="home-illustration-mobile md:hidden">
        <img src="/assets/home1.svg" alt="earth" />
      </div>

      <div className="home-content flex justify-center">
        <div className="hidden md:block">
          <Typography className="home-content-heading" variant="h1">
            <span className="text-blue-600">Bi</span>frost
          </Typography>

          <Typography className="home-content-subheading my-5" variant="h6">
            Visualize and learn more about different <br /> countries using
            Bifrost 3D Globe
          </Typography>

          <div className="home-content-button my-10">
            <Link
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-lg hover:"
              to="/dashboard"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="home-illustration hidden md:flex md:items-center md:justify-center">
        <img src="/assets/home1.svg" alt="earth" height={500} width={500} />
      </div>
    </div>
  );
}
