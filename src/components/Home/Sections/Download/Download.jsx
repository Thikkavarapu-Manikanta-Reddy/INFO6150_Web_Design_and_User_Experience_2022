import React, { Component } from 'react';
import "./Download.css";

export class Download extends Component {
    render() {
        return (
            <div>
                <div className="scrollcontainer">
                    <div className="scrollcontent">
                        <div className='download-box'>
                            <h1 style={{ marginBottom: 0 }}>Get it now</h1>
                            <p>Available on all native App Store</p>
                            <div className="img-container">
                                <img style={{ margin: 'none' }} src="/Images/is-badge.png" />&nbsp;&nbsp;
                                <img style={{ margin: 'none' }} src="/Images/an-badge.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download