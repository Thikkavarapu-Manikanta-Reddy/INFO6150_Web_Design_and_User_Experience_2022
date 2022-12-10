import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import signUpBackground from "../../screen-2.png";
import signUpSVG from "../../signUp.svg";

import { useState, useEffect } from "react";
import "./Signup.scss";

const payload = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  university: "NEU",
};

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

export default function SignUp() {
  const [values, setValues] = useState(payload);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const payloadOld = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      confirmPassword: data.get("confirmPassword"),
      // university: "NEU",
    };
    console.log(payloadOld);

    console.log("state =>", values);

    return fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="layout">
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={3}
            md={7}
            sx={{
              backgroundImage: `url(${signUpBackground})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "65%",
              height: "65%",
              marginTop: 16,
            }}
          />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      value={values.firstName}
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={values.lastName}
                      autoComplete="family-name"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      value={values.email}
                      autoComplete="email"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      value={values.password}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmPassword"
                      value={values.confirmPassword}
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-label">
                      Choose University
                    </InputLabel>
                    <Select
                      name="university"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      placeholder="Choose University"
                      value={"NEU"}
                      style={{ width: "100%" }}
                      onChange={handleChange}
                    >
                      <MenuItem value={"NEU"}>Northeastern University</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>

                <Grid container justifyContent="flex-end">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                </Grid>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/login")}
                      variant="body2"
                    >
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Container>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
