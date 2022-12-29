import React, { useState, useEffect } from 'react';
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import axios from "../../configs/axiosConfig";
import localStorageService from '../../configs/LocalStorageService';
import Snackbar from '../../components/SnackBar/SnackBar';
import EndPointLoader from '../../components/EndPointLoader/EndPointLoader';

function Login() {

    const [emailId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [MessageHandler, setMessageHandler] = useState({ message: '', status: true });

    const [open, setOpen] = React.useState(false);

    const [showLoader, setshowLoader] = useState(false);
    const [uploadPercentage, setuploadPercentage] = useState(0);

    const uploadProgressOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            let percent = Math.floor((loaded * 100) / total)
            console.log(`${loaded}bytes of ${total}bytes | ${percent}%`);
            setuploadPercentage(percent);
        }
    }

    const handleClick = () => {
        setOpen(true);
    };

    const goToHome = () => {
        navigate("/");
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const login = () => {

        let isSubscribed = true;

        let payload = {
            "emailId": emailId,
            "password": password
        }

        setshowLoader(true);
        axios.post('/login', payload, uploadProgressOptions)
            .then(response => {
                console.log(response);
                if (isSubscribed === true) {
                    if (response.data.success === true) {
                        setMessageHandler({ ...MessageHandler, message: response.data.message, status: true });
                        handleClick();
                        setTimeout(() => {
                            localStorageService.setUser(response.data.data);
                            navigate("/dashboard");
                        }, 1000);
                    }
                    else {
                        setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
                        handleClick();
                    }
                }
                setshowLoader(false);
            })
            .catch(error => {
                if (isSubscribed === true) {
                    console.log(error, error.response, error.message, error.request);
                    setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
                    handleClick();
                }
                setshowLoader(false);
            })
        return () => (isSubscribed = false);
    }

    useEffect(() => {
    }, []);

    return (
        <div className="poppinsFont">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center"><br /><br /><br />
                        <h4 style={{cursor: "pointer"}} onClick={goToHome} className="secondary-color fontBoldMedium" ><i className="fa fa-graduation-cap"></i>Event Ding</h4><br />
                        <img className="imageSize" src="/Images/screen-1.png" alt="Not_Found" /><br /><br /><br />
                        <h4 className="smallTextColor fontRegularMedium">Biggest platform to host college events.</h4>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br /><br /><br />
                        <div className="login">
                            <h5 className="smallTextColor fontRegularSmall">Welcome !</h5>
                            <h5 className="secondary-color fontBoldSmall">Login/SignUp</h5><br />
                            <form>

                                <TextField
                                    autoComplete="given-name"
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Id"
                                    autoFocus
                                    placeholder="Email Id" type="email" value={emailId} onChange={e => {
                                        setEmailId(e.target.value);
                                    }}
                                />

                                {/* <input placeholder="Email Id*" type="email" value={emailId} onChange={e => {
                                    setEmailId(e.target.value);
                                }} /> */}
                                <br /><div style={{ marginTop: "15px" }} />

                                <TextField
                                    autoComplete="given-name"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    type="password"
                                    placeholder="Password" value={password} onChange={e => {
                                        setPassword(e.target.value);
                                    }}
                                />

                                {/* <input placeholder="Password*" type="text" value={password} onChange={e => {
                                    setPassword(e.target.value);
                                }} /> */}
                                <br /><br />
                                <button onClick={login} className="button button1" type="button" disabled={emailId === '' || password === ''}>
                                    <span className="fontBoldMiniSmall">Login</span></button><br /><br />
                                <p className="smallTextColor fontRegularSmall">Don't have an account ?</p>
                                <button onClick={() => navigate("/registerEmail")} style={{ color: "#069", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", padding: "0" }}>SignUp</button>
                                <br /><br />
                            </form>
                        </div>
                        <br /><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                </div>
            </div>
            {showLoader === true ? <EndPointLoader showLoader={showLoader} uploadPercentage={uploadPercentage} /> : null}
            {open === true ? <Snackbar handleClose={handleClose} status={MessageHandler.status} message={MessageHandler.message} openStatus={open} /> : null}
        </div>
    )
}

export default React.memo(Login)
