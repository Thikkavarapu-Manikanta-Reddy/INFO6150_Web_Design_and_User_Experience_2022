import React from 'react';
import "./Dashboard.scss";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function Dashboard({ user }) {

    const addEvent = () => {

    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div style={{marginTop: "20px"}} className="mobileCardCenterView col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                        <h5 className="secondaryColor fontBoldSmall"><i className="fas fa-user-graduate"></i>&nbsp;&nbsp;Event hosting</h5>
                        {
                            user.role === 'Admin' ?
                                <div>
                                    <Fab style={{ backgroundColor: "#0e76a8" }} onClick={addEvent} size="small" color="primary" aria-label="add">
                                        <AddIcon />
                                    </Fab>&nbsp;&nbsp;
                                    <span className="smallTextColor fontRegularSmall">Events</span><br />
                                </div>
                                : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard