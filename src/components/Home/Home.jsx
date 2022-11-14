import React from "react";
import MainSection from "./Sections/MainSection/MainSection";
import Connect from "./Sections/Connect/Connect";
import College from "./Sections/College/College";
import Competitions from "./Sections/Competitions/Competitions";
import Events from "./Sections/Events/Events";
import Sliders from "./Sections/Slider/Slider";
import Download from "./Sections/Download/Download";
const Home = () => {
  return (
    <section className="main_sec home_page">
      <MainSection />
      <Connect />
      <College />
      <Events />
      <Competitions />
      <Download />
      <Sliders />
    </section>
  );
};

export default Home;
