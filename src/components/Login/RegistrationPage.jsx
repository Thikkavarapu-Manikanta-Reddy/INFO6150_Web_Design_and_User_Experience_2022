import * as reactIconsFa from "https://cdn.skypack.dev/react-icons@4.2.0/fa";
import * as reactIconsRi from "https://cdn.skypack.dev/react-icons@4.2.0/ri";
import * as reactJss from "https://cdn.skypack.dev/react-jss@10.5.1";

import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
const { ThemeProvider, withStyles } = reactJss;

const { FaChessBishop, FaPlusCircle, FaArrowLeft } = reactIconsFa;
const { RiMoonClearLine, RiSunLine } = reactIconsRi;

const registrationPageStyles = (theme) => ({
  "@keyframes slideRight": {
    from: {
      opacity: 0,
      transform: "translateX(-30px) scale(0.98)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px) scale(1)",
    },
  },
  loginCard: {
    animation: "$slideRight ease-in 0.3s",
    boxShadow: "0 2px 20px 3px rgb(0 0 0 / 6%)",
    background: theme.background.paper,
    color: theme.text.primary,
    width: "410px",
    padding: "2rem",
    position: "relative",
  },
  cardHeader: {
    color: theme.text.activeLink,
    fontWeight: 600,
    fontSize: "1.6em",
  },
});
const alertStyles = (theme) => ({
  "@keyframes slideRight": {
    from: {
      opacity: 0,
      transform: "translateX(-10px) scale(0.98)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px) scale(1)",
    },
  },
  alert: {
    animation: "$slideRight ease-in 0.3s",
    padding: "20px",
    background: (props) => {
      if (!props.type) return theme.alert.error;
      if (props.type === "success") return theme.alert.success;
    },
    borderLeft: (props) => {
      if (!props.type) return "5px solid #FFB3C0";
      if (props.type === "success") return "5px solid #A7F3D0";
    },
    borderRadius: "4px",
    fontSize: ".875rem",
    margin: "10px 0px",
    color: theme.text.primary,
  },
  success: {
    background: "#fafffa",
    borderLeft: "5px solid #d4ffb3",
  },
  title: {
    fontWeight: 700,
  },
  link: {
    cursor: "pointer",
  },
});
const labelStyles = (theme) => ({
  label: {
    fontSize: ".875rem",
    display: "block",
    marginBottom: "1rem",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    "& input": {
      marginTop: ".25rem",
    },
  },
});
const inputStyles = (theme) => ({
  inputMain: {
    color: theme.text.input,
    fontSize: ".875rem",
    padding: ".5rem .75rem",
    lineHeight: "1.5",
    display: "block",
    borderRadius: ".25rem",
    outline: "none",
    backgroundColor: theme.background.input,
    border: `1px solid ${theme.border.input}`,
    width: "100%",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
    marginTop: ".5rem",
    "&:focus": {
      boxShadow: `0 0 0 3px ${theme.colors.primary + "42"}`,
      outlineColor: "rgba(0,0,0,0)",
      outlineOffset: "2px",
      outlineStyle: "solid",
      borderColor: theme.colors.primary,
    },
  },
  inputWrapper: {
    display: "flex",
  },
  checkbox: {
    width: "auto",
    marginRight: ".5rem",
    appearance: "none",
    display: "inline-block",
    verticalAlign: "middle",
    height: "17px",
    width: "17px",
    padding: 0,
    "&:focus": {
      boxShadow: `0 0 0 3px ${theme.colors.primary + "42"}`,
      outlineColor: "rgba(0,0,0,0)",
      outlineOffset: "2px",
      outlineStyle: "solid",
      borderColor: theme.colors.primary,
    },
    "&:checked": {
      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E")`,
      backgroundColor: theme.colors.primary,
      borderColor: "transparent",
      backgroundSize: "100% 100%",
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
    },
  },
  inlineWrapper: {
    display: "inline-block",
  },
});
const buttonStyles = (theme) => ({
  buttonMain: {
    width: (props) => (props.fullWidth ? "100%" : "auto"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    background: (props) => {
      if (props.color) return theme.colors[props.color];
      return theme.colors.primary;
    },
    borderRadius: ".25rem",
    border: "none",
    color: "#fff",
    fontFamily: "inherit",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(90%)",
    },
    "&:focus": {
      boxShadow: (props) => {
        if (props.color) return `0 0 0 3px ${theme.colors[props.color] + "42"}`;
        return `0 0 0 3px ${theme.colors.primary + "42"}`;
      },
      outlineColor: "rgba(0,0,0,0)",
      outlineOffset: "2px",
      outlineStyle: "solid",
      borderColor: theme.colors.primary,
    },
  },
  iconLeft: {
    marginRight: ".5rem",
    display: "flex",
    alignItems: "center",
  },
});

function Alert(props) {
  const classes = props.classes;
  return (
    <>
      <div className={classes.alert}>
        <summary className={classes.title}>{props.title}</summary>
        {props.children}
      </div>
    </>
  );
}
Alert = withStyles(alertStyles)(Alert);

function Label(props) {
  const classes = props.classes;
  return <label className={classes.label}>{props.children}</label>;
}
Label = withStyles(labelStyles)(Label);

function Input(props) {
  const classes = props.classes;
  return (
    <div
      className={
        classes.inputWrapper +
        (props.type === "checkbox" ? " " + classes.inlineWrapper : "")
      }
    >
      <input
        className={
          classes.inputMain +
          (props.type === "checkbox" ? " " + classes.checkbox : "")
        }
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        checked={props.value}
        type={props.type}
        style={{ ...props.style }}
      ></input>
    </div>
  );
}
Input = withStyles(inputStyles)(Input);

function Button(props) {
  const classes = props.classes;
  return (
    <button
      className={classes.buttonMain}
      onClick={props.onClick}
      type={props.type}
    >
      {props.iconLeft ? (
        <span className={classes.iconLeft}>{props.iconLeft}</span>
      ) : (
        ""
      )}
      {props.children}
    </button>
  );
}
Button = withStyles(buttonStyles)(Button);

function Divider(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{ height: "1px", width: "100%", background: "#d1d5db" }}
      ></div>
      <p style={{ margin: "10px", fontWeight: 100, color: "#94979c" }}>OR</p>
      <div
        style={{ height: "1px", width: "100%", background: "#d1d5db" }}
      ></div>
    </div>
  );
}

function RegistrationPage(props) {
  const classes = props.classes;
  const navigate = useNavigate();
  const [response, setResponse] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  const backToLogin = () => {
    navigate("/login");
  };

  const emailValidate = (value) => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!emailRegex.test(value)) return "Wrong email";
    return undefined;
  };

  const passwordValidate = (value) => {
    if (!value || value.length < 6)
      return "Passwords must be more than 6 characters";
    return undefined;
  };

  const repeatValidate = (val1, val2) =>
    !val1 || val2 !== val1 ? "Password mismatch" : undefined;

  const registrationSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("registration sumbmit handler");

    let errors = [];
    let emailCheck = emailValidate(email);
    if (emailCheck) errors.push(emailCheck);

    let passwordCheck = passwordValidate(password);
    if (passwordCheck) errors.push(passwordCheck);

    let repeatCheck = repeatValidate(password, repeatPassword);
    if (repeatCheck) errors.push(repeatCheck);

    setFormErrors(errors);
    if (!errors.length) setResponse("Registation done, check you email :)");
  };

  return (
    <div className={classes.loginCard}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontWeight: 100,
          marginBottom: "25px",
        }}
      >
        <FaChessBishop
          style={{ marginRight: "10px", fontSize: "1.3em", color: "#83afe0" }}
        />
        <span>Amazing service</span>
      </div>

      <h1 className={classes.cardHeader}>Sign Up</h1>

      {!response ? (
        <div className="form">
          <form onSubmit={registrationSubmitHandler}>
            {formErrors.length ? (
              <Alert title="Registration failed">
                {formErrors.map((err) => (
                  <div>{err}</div>
                ))}
              </Alert>
            ) : (
              ""
            )}

            <div>
              <Label>
                <span>Email</span>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
            </div>

            <div>
              <Label>
                <span>Password</span>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
            </div>

            <div>
              <Label>
                <span>Repeat password</span>
                <Input
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </Label>
            </div>

            <div style={{ marginTop: "10px" }}>
              <Button type="submit" fullWidth>
                Create account
              </Button>
              <Divider />
            </div>
          </form>
        </div>
      ) : (
        <Alert type="success">{response}</Alert>
      )}

      <Button
        fullWidth
        onClick={backToLogin}
        color="green"
        iconLeft={<FaArrowLeft />}
      >
        Back to log in
      </Button>
    </div>
  );
}
RegistrationPage = withStyles(registrationPageStyles)(RegistrationPage);

export default RegistrationPage;
