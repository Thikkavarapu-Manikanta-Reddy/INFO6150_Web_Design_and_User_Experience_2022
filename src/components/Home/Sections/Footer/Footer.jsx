import React, { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Google from "../../Google";
import './Footer.css';

const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (mounted) setShow(true);
      } else {
        if (mounted) setShow(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <footer>
      <div className="custom_container">
        <div className="row">
          <div className="col-md-4 order-md-1">
            <div className="footer_logo">
              <EmojiEventsIcon />
            </div>
          </div>
          <div className="col-md-4 order-md-3 my-auto">
            <Google />
          </div>
          <div className="col-md-4 order-md-2">
            <div className="footer_social">
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="col-md-12 order-md-4">
            <div className="copy_right">
              <div className="row">
                <div className="col-md-4">
                  <div className="copy_year">
                    <p>© 2022 EventDing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#top" className={`floating_button ${show && "show-scroll"}`}>
        <ArrowUpwardIcon fontSize="large" />
      </a>
    </footer>
  );
};

export default Footer;