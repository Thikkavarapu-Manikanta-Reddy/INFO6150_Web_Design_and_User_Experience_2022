import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lf30_editor_dr9jtyjd.json';
import "./EndPointLoader.scss";

function EndPointLoader(props) {

    const { showLoader, uploadPercentage } = props;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const styles = {
        checkAnimation: {
            width: '300px',
            height: '200px',
            margin: '190px auto auto'
        },
    }

    return (
        <div>
            {
                showLoader === true ?
                    <div className="overlay">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <Lottie
                                        style={styles.checkAnimation}
                                        options={defaultOptions}
                                    />
                                    <p className="secondaryColor fontBoldSmall">
                                        Load<span style={{color: "white"}}>ing...</span>
                                    </p>
                                    <div className="progress form-group" style={{ width: "30%", margin: "auto" }}>
                                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${uploadPercentage}%`, backgroundColor: "#0e76a8" }}>
                                        </div>
                                    </div>
                                    <span style={{ color: "#0e76a8", fontSize: "130%" }}>{uploadPercentage}<span style={{color: "white"}}>%</span></span>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default React.memo(EndPointLoader)