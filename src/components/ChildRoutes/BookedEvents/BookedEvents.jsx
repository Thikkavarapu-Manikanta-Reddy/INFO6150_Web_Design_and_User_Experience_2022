import React, { useState, useEffect } from 'react';
import "./BookedEvents.scss";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EndPointLoader from "../../EndPointLoader/EndPointLoader";
import Snackbar from "../../SnackBar/SnackBar";
import axios from '../../../configs/axiosConfig';
import Avatar from 'react-avatar';
import { useNavigate } from 'react-router-dom';

function BookedEvents({ user }) {

  const navigate = useNavigate();

  const [bookedEventDataList, setBookedEventDataList] = useState(null);

  const [MessageHandler, setMessageHandler] = useState({ message: '', status: false });

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

  useEffect(() => {
    bookedEventsDisplay();
    // setBookedEventDataList({
    //   "events": [
    //     {
    //       "id": "1",
    //       "title": "Diwali 2022 Party",
    //       "type": "Food",
    //       "description": "cfwdefcw",
    //       "ticketCount": 89,
    //       "dateAndTime": "23 March 2022 - 8:25 am",
    //       "location": "SHILMAN HALL"
    //     },
    //     {
    //       "id": "2",
    //       "title": "Diwali 2022 Party",
    //       "type": "Entertainment",
    //       "description": "cfwdefcw",
    //       "ticketCount": 89,
    //       "dateAndTime": "12th June 2022 - 9:00 am",
    //       "location": "SHILMAN HALL"
    //     },
    //     {
    //       "id": "3",
    //       "title": "Diwali 2022 Party",
    //       "type": "Movie",
    //       "description": "cfwdefcw",
    //       "ticketCount": 89,
    //       "dateAndTime": "12th June 2022 - 9:00 am",
    //       "location": "SHILMAN HALL"
    //     },
    //     {
    //       "id": "4",
    //       "title": "Diwali 2022 Party",
    //       "type": "Music",
    //       "description": "cfwdefcw",
    //       "ticketCount": 89,
    //       "dateAndTime": "12th June 2022 - 9:00 am",
    //       "location": "SHILMAN HALL"
    //     }
    //   ]
    // })
  }, [])

  const bookedEventsDisplay = () => {

    let isSubscribed = true;

    setshowLoader(true);
    axios.get('/getStudentEvents', uploadProgressOptions)
      .then(response => {
        console.log(response);
        if (isSubscribed === true) {
          if (response.data.success === true) {
            setBookedEventDataList(response.data.data);
          }
          else {
            setMessageHandler({ ...MessageHandler, message: response.data.message, status: false });
            setBookedEventDataList(null);
            handleClick();
          }
        }
        setshowLoader(false);
      })
      .catch(error => {
        if (isSubscribed === true) {
          console.log(error, error.response, error.message, error.request);
          setMessageHandler({ ...MessageHandler, message: error.response.data.message, status: false });
          setBookedEventDataList(null);
          handleClick();
        }
        setshowLoader(false);
      })
    return () => (isSubscribed = false);

  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="poppinsFont">
      <div className="container-fluid">
        <div className="row">
          <div style={{ marginTop: "20px" }} className="mobileCardCenterView col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h5 className="secondary-color fontBoldSmall"><i className="fas fa-child"></i>&nbsp;&nbsp;
              <span>Booked Event hosting</span>
            </h5>
            <div>
              <Fab style={{ backgroundColor: "#0e76a8" }} onClick={() => navigate("/dashboard/events")} size="small" color="primary" aria-label="add">
                <AddIcon />
              </Fab>&nbsp;&nbsp;
              <span className="smallTextColor fontRegularSmall">Book events</span><br />
            </div>
          </div>
        </div>

        {
          bookedEventDataList === null ?
            (
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 text-center"><br />
                  <h4 className="smallTextColor fontRegularMedium">
                    <span>No Events Available !!</span>
                  </h4>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3"></div>
              </div>
            ) :
            (
              <>
                {bookedEventDataList === null ? null :
                  (
                    <>
                      <div className="row">
                        {bookedEventDataList.map((data, index) => (
                          <div key={data.id} className="mobileCardCenterView col-xs-12 col-sm-12 col-md-4 col-lg-4"><br />
                            <div id="box" className="card" style={{ width: "100%", borderRadius: "12px" }}>
                              <div className="card-body">
                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                                    <span style={{ marginLeft: "-10px" }}>
                                      <Avatar name={data.title} size="35" round={true} />
                                    </span>
                                  </div>
                                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                                    <h5 style={{ marginTop: "4px" }} className="secondary-color fontBoldSmall card-title">{data.title}</h5><br />
                                  </div>
                                </div>


                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <img style={{ width: "100px", height: "100px" }} src={"/" + process.env.PUBLIC_URL + data.type + ".svg"} />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="smallTextColor fontCustomSmall">Description <span style={{ marginLeft: "8px" }}></span> : &nbsp;{data.description}</span><br />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="smallTextColor fontCustomSmall">Location <span style={{ marginLeft: "28px" }}></span>: &nbsp;{data.location}</span><br />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="smallTextColor fontCustomSmall">Date & Time : &nbsp;{data.dateAndTime}</span><br />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <span className="smallTextColor fontCustomSmall">Tickets <span style={{ marginLeft: "40px" }}></span> : &nbsp;{data.ticketCount}</span><br />
                                  </div>
                                </div>

                                <div className="row">
                                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <hr />
                                    <div className="row">
                                      {/* <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                                                                                <i style={{ fontSize: "20px", color: "#0e76a8", cursor: "pointer" }} onClick={() => viewMediaFiles(data)} className="fa fa-eye"></i>
                                                                            </div> */}
                                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                        Ticket Confirmed &nbsp;
                                        <i style={{ fontSize: "20px", color: "#3CB371", cursor: "pointer" }} className="fa fa-check"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div><br />
                          </div>
                        ))}
                      </div>
                    </>

                  )
                }
              </>
            )
        }
        {showLoader === true ? <EndPointLoader showLoader={showLoader} uploadPercentage={uploadPercentage} /> : null}
        {open === true ? <Snackbar handleClose={handleClose} status={MessageHandler.status} message={MessageHandler.message} openStatus={open} /> : null}
      </div>
    </div>
  )
}

export default BookedEvents