import React from "react";
import MainSection from "./Sections/MainSection/MainSection";
import Connect from "./Sections/Connect/Connect";
import College from "./Sections/College/College";
import Competitions from "./Sections/Competitions/Competitions";
import Events from "./Sections/Events/Events";
import Sliders from "./Sections/Slider/Slider";
import Download from "./Sections/Download/Download";
// import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Feature from "./Sections/Feature/Feature";
import "./Home.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Fonts } from "../../fonts";

const Home = () => {

  const theme = extendTheme({
    fonts: {
      body: "Josefin Sans",
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Fonts />
        <section className="main_sec home_page">
          <MainSection />
          <Connect />
          <College />
          <Feature />
          <Events />
          <Competitions />
          <Download />
          <Sliders />
        </section>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default Home;
