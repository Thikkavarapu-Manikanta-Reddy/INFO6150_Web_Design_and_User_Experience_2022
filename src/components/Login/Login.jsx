import React, { useState, useEffect  } from 'react';
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {

    const [emaiId, setEmailId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center"><br /><br /><br />
                        <h4 className="primaryColor fontBoldMedium" ><i className="fa fa-graduation-cap"></i>Event Ding</h4><br />
                        <img className="imageSize" src="/Images/screen-1.png" alt="Not_Found" /><br /><br /><br />
                        <h4 className="smallTextColor fontRegularMedium">Biggest platform to host college events.</h4>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                        <br /><br /><br /><br /><br /><br />
                        <div className="login">
                            <h5 className="smallTextColor fontRegularSmall">Welcome !</h5>
                            <h5 className="primaryColor fontBoldSmall">Login/SignUp</h5><br />
                            <form>
                                <input placeholder="Email Id*" type="email" value={emaiId} onChange={e => {
                                    setEmailId(e.target.value);
                                }} />
                                <br /><div style={{ marginTop: "15px" }} />
                                <input placeholder="Password*" type="text" value={password} onChange={e => {
                                    setPassword(e.target.value);
                                }} /><br /><br />
                                <button className="button button1" type="button" disabled={emaiId === '' || password === ''}>
                                    <span className="fontBoldMiniSmall">Login</span></button><br /><br />
                                <p className="smallTextColor fontRegularSmall">Don't have an account ?</p>
                                <button onClick={() => navigate("/redirect")} style={{ color: "#069", textDecoration: "underline", cursor: "pointer", background: "none", border: "none", padding: "0" }}>SignUp</button>
                                <br /><br />
                            </form>
                        </div>
                        <br /><br />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Login)
