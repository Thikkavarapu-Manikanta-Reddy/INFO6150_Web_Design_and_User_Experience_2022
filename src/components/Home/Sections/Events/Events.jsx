import React from "react";
import Images from "../../Images";
import Circle from "../../Circle";
import Triangle from "../../Triangle";
import TextContent from "../../TextContent";
import Fade from "react-reveal/Fade";
import './Events.css';

const Events = () => {
  return (
    <section className="feature_section home_section8 bg_2" id="events">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="Find Events around you"
                desc="Never miss important events happening near you through our AI
                  based Recommendation engine."
              >
                <Circle num="23" />
              </TextContent>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <Circle num="240" />
              <Circle num="46" />
              <Circle num="50" />
              <Images src="/Images/mockup_events.png" classes="feature_model" />
            </div>
          </div>
        </div>
      </div>
      <div className="svg9">
        <svg viewBox="0,0 10,10" width="750px" height="750px">
          <path
            className="track"
            fill="none"
            strokeWidth="0.015"
            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
          ></path>
          <circle className="circle_move" fill="#707070" r=".2"></circle>
        </svg>
      </div>
      <Triangle />
    </section>
  );
};

export default Events;