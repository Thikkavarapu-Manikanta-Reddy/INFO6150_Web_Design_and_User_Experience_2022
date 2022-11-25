import React from 'react';
import "./Feature.css";
import Fade from "react-reveal/Fade";

function Feature() {
    return (
        <div>
            <section className="sec-pad-lg grdnt-yellow light" id="features">
                <div className="container-fluid">
                    <div className="row">
                        <div className="flx-container res-center-sm align-flx-center flx-off-sm row">
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 res-margin-sm wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".2s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                <Fade left>
                                    <div className="text first-part">
                                        <h3>Create Exciting College Memories</h3>
                                        <div className="spce"></div>
                                        <p></p>
                                        <div className="spce"></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".4s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                <Fade bottom>
                                    <img className="feature-img" src="/Images/3.png" alt="image" />
                                </Fade>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md-offset-1 col-sm-4">
                                <Fade right>
                                    <div className="right-dir-col wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".6s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-smile-o"></i>
                                                <div className="text"><h5>Participate college events</h5><p>Explore events across all colleges.</p></div>
                                            </div>
                                            <div className="spce"></div>
                                        </div>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-commenting-o"></i>
                                                <div className="text"><h5>Connect with college students</h5><p>Find like minded students and start chatting with them.</p></div>
                                            </div>
                                            <div className="spce"></div>
                                        </div>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-certificate"></i>
                                                <div className="text"><h5>Discover your passion</h5><p>Connect on shared interests skills, &amp; support each other.</p></div>
                                            </div>
                                            {/* <div className="spce"></div> */}
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature