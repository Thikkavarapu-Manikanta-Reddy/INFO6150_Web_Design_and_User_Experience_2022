import React, { useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Snackbar, Alert } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import registerImage from "../../assets/img-f.png";
import localStorageService from "../../configs/LocalStorageService";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EventDing
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function Register() {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openIncorrectOTP, setOpenIncorrectOTP] = React.useState(false);
  const form = useRef();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };

  const handleSubmitOTP = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("user_email"),
      password: data.get("password"),
    });

    emailjs
      .sendForm(
        "service_ow62gig",
        "template_nfe8vak",
        form.current,
        "aIr5TJYeFklo-paEK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setOpenSuccess(true);
    console.log(form);
  };

  const handleSubmit = (event) => {
    console.log("inside handle submit");
    const otp = document.getElementById("password").value;
    console.log(otp);
    if (otp === "4423") {
      localStorageService.setVerifiedUser("true");
      navigate("/signup");
    } else {
      setOpenIncorrectOTP(true);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${registerImage})`,
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            marginTop: 16,
            width: "65%",
            height: "65%",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 18,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Verify E-Mail
            </Typography>
            <Box
              // component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <form onSubmit={handleSubmitOTP} ref={form}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  name="password"
                  label="Enter OTP"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 20 }}
                >
                  Send OTP
                </Button>
                <Snackbar
                  open={openSuccess}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    OTP sent to your email ID!
                  </Alert>
                </Snackbar>
                <Button
                  //   type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 2 }}
                  onClick={handleSubmit}
                >
                  Verify
                </Button>
                <Snackbar
                  open={openIncorrectOTP}
                  autoHideDuration={6000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    Incorrect OTP!
                  </Alert>
                </Snackbar>
              </form>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// =================================================================
// function Register() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     console.log(form.current);
//     emailjs
//       .sendForm(
//         "service_ow62gig",
//         "template_nfe8vak",
//         form.current,
//         "aIr5TJYeFklo-paEK"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <input type="submit" value="Send" />
//     </form>
//   );

//   //   ====================================================================
//   //   const [email, setEmail] = useState("");

//   //   const handleSubmit = (e) => {
//   //     var email = document.getElementById("email").value;

//   //     var contactParams = {
//   //       from_email: email,
//   //     };

//   //     console.log(contactParams);
//   //     emailjs.send("service_ow62gig", "template_nfe8vak");
//   //   };
//   //   return (
//   //     <form onSubmit={handleSubmit}>
//   //       <input
//   //         id="email"
//   //         type="email"
//   //         placeholder="Email"
//   //         name="email"
//   //         value={email}
//   //         onChange={(e) => setEmail(e.target.value)}
//   //         required
//   //         // className={styles.input}
//   //         style={{ border: "1px solid black" }}
//   //       />
//   //       <button>Submit</button>
//   //     </form>
//   //   );
// }

export default Register;
