import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./LazyLoader.css";

function LazyLoader() {
    return (
        <div className="container-fluid">
            <div style={{marginTop: "18%"}} className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <CircularProgress />
                    <p>Loading...</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            </div>
        </div>
    )
}

export default LazyLoader