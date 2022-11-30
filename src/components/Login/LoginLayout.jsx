import * as reactIconsFa from "https://cdn.skypack.dev/react-icons@4.2.0/fa";
import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";

import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
const { ThemeProvider, withStyles } = reactJss;

const { FaChessBishop, FaPlusCircle, FaArrowLeft } = reactIconsFa;
const { RiMoonClearLine, RiSunLine } = reactIconsRi;

const useThemeContext = () => {
  return useContext(CustomThemeContext);
};
const toggleThemeButtonStyles = (theme) => ({
  button: {
    border: "none",
    padding: "5px",
    cursor: "pointer",
    marginLeft: "15px",
    fontSize: (props) => (props.size ? props.size : "1.5em"),
    display: "flex",
    borderRadius: "25px",
    color: theme.text.outlinedButton,
    background: (props) => {
      if (props.transparent) return "transparent";
      return theme.type === "light" ? "#4d515d" : "#f2f3f5";
    },
    color: (props) => {
      if (props.transparent) return theme.text.activeLink;
      return theme.type === "light" ? "#fff" : "#000";
    },
    outline: "none",
    "&:hover": {
      transition: "transform 0.2s",
      transform: "scale(1) rotate(0.1turn)",
    },
  },
  "@keyframes roundIn": {
    from: {
      opacity: 0,
      transform: "rotate(0.5turn)",
    },
    to: {
      opacity: 1,
      transform: "rotate(0)",
    },
  },
  themeIcon: {
    animation: "$roundIn ease-in 0.4s",
  },
});
function ToggleThemeButton(props) {
  const classes = props.classes;
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <button className={classes.button} onClick={toggleTheme}>
      {currentTheme === "light" ? (
        <RiMoonClearLine className={classes.themeIcon} />
      ) : (
        <RiSunLine className={classes.themeIcon} />
      )}
    </button>
  );
}
ToggleThemeButton = withStyles(toggleThemeButtonStyles)(ToggleThemeButton);

// =================================================
const CustomThemeContext = createContext();
const loginLayoutStyles = (theme) => ({
  loginLayout: {
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `${theme.background.default} url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve" height="800px" width="800px"><g><path fill="%23${theme.blob}" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" fill-rule="nonzero"/></g></svg>') 50% no-repeat`,
  },
  rightAngleAction: {
    position: "absolute",
    top: "10px",
    right: "20px",
  },
});

function LoginLayout(props) {
  const classes = props.classes;

  return (
    <div className={classes.loginLayout}>
      <div className={classes.rightAngleAction}>
        <ToggleThemeButton size={"2.2em"} transparent />
      </div>
      {props.children}
    </div>
  );
}
LoginLayout = withStyles(loginLayoutStyles)(LoginLayout);

export default LoginLayout;
