import React from 'react';
import supportTeam from "../../../assets/undraw_instant_support_elxh.svg";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import localStorageServic from '../../../configs/LocalStorageService';

function Home({ user }) {

    const navigate = useNavigate();

    const logout = () => {
        localStorageServic.removeSessionData();
        navigate("/login");
    }

    return (
        <div style={{ width: "70%", margin: "auto" }}>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"><br />
                    <h5 className="secondary-color fontBoldSmall"><i className="fa fa-home"></i>&nbsp;&nbsp;
                        <span>Home</span>
                    </h5>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center"><br />
                    <div className="smallTextColor fontCustomSmall" style={{ backgroundColor: "#F5F8FC", padding: "9px", width: "80%", margin: "auto" }}>
                        FEATURED
                    </div>
                </div>
            </div><br /><br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div onClick={() => navigate("/dashboard/events")} className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fas fa-bullhorn"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Events
                    </p>
                </div>
                {
                    user.role == "Student" ?
                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                            <div onClick={() => navigate("/dashboard/booked-events")} className="hoverTransition">
                                <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-clock-o"></i>
                            </div><br />
                            <p className="secondaryColor fontRegularSmall">
                                Booked Events
                            </p>
                        </div> : null}
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-user"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Profile
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-users"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Groups
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-trophy"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Competitions
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-usd"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Refer & Earn
                    </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                    <div onClick={logout} className="hoverTransition">
                        <i style={{ marginTop: "25px", fontSize: "40px" }} className="fa fa-sign-out-alt"></i>
                    </div><br />
                    <p className="secondaryColor fontRegularSmall">
                        Logout
                    </p>
                </div>
            </div><br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <div className="smallTextColor fontCustomSmall" style={{ backgroundColor: "#F5F8FC", padding: "9px", width: "80%", margin: "auto" }}>
                        HELP & SUPPORT
                    </div>
                </div>
            </div><br /><br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10">
                    <div id="box" className="card" style={{ width: "100%" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                                    <p style={{ marginTop: "50px" }} className="smallTextColor fontCustomSmall">
                                        Hi, we are here to provide support.If you have any doubts regarding the features and flow of the app. Kindly contact us for more details.
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                                    <img className="supportTeamImage" src={supportTeam} alt="Not_Found" />
                                </div>
                            </div><br /><hr /><br />
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                    <button style={{ fontSize: "100%", border: "none", backgroundColor: "Transparent", color: "#004b79", cursor: "pointer", outline: "none", overflow: "hidden" }} >
                                        <span className="fontSemiBoldSmall">Contact us &nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                                    <button style={{ fontSize: "100%", border: "none", backgroundColor: "Transparent", color: "#004b79", cursor: "pointer", outline: "none", overflow: "hidden" }} >
                                        <span className="fontSemiBoldSmall">Customer care &nbsp;&nbsp;<i className="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>
            </div>
        </div >
    )
}

export default React.memo(Home)