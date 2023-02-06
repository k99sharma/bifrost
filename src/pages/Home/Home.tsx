// importing libraries
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

// features list
const featuresList = [
  {
    pic: "/assets/feature1.png",
    description: "Interactive Earth model",
    label: "earth",
  },
  {
    pic: "/assets/feature2.png",
    description: "Geolocate countries",
    label: "geolocation",
  },
  {
    pic: "/assets/feature3.png",
    description: "Learn about countries",
    label: "information",
  },
];

// features component
function Features() {
  return (
    <div className="features flex items-center justify-around p-5 rounded-2xl bg-sky-500 shadow-md">
      {featuresList.map((feature) => (
        <div
          key={feature.label}
          className="feature flex flex-col items-center justify-center w-1/5"
        >
          <div className="feature-pic mb-2">
            <img src={feature.pic} alt={feature.label} height={80} width={80} />
          </div>
          <div className="feature-description text-white text-center">
            {feature.description}
          </div>
        </div>
      ))}
    </div>
  );
}

// home component
export default function Home() {
  return (
    <div className="home grid grid-cols-1 md:grid-cols-2 p-5 md:p-10">
      <div className="home-content-mobile md:hidden flex flex-col items-center justify-center mb-10">
        <Typography className="home-content-heading" variant="h1">
          <span className="text-blue-600">Bi</span>frost
        </Typography>

        <div className="home-content-subheading text-center">
          Visualize and learn more about different countries using Bifrost 3D
          Globe
        </div>

        <div className="home-content-button my-10">
          <Link
            className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 rounded-lg"
            to="/dashboard"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="home-illustration-mobile md:hidden">
        <img src="/assets/home1.svg" alt="earth" />
      </div>

      <div className="home-feature-mobile my-10 md:hidden">
        <Features />
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
              className="bg-zinc-900 text-white p-3 rounded-xl text-lg"
              to="/dashboard"
            >
              Get Started
            </Link>
          </div>

          <div className="home-features">
            <Features />
          </div>
        </div>
      </div>

      <div className="home-illustration hidden md:flex md:items-center md:justify-center">
        <img src="/assets/home1.svg" alt="earth" height={500} width={500} />
      </div>
    </div>
  );
}
