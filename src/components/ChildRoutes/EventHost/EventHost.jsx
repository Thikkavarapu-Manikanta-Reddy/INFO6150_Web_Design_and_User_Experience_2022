import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../../configs/axiosConfig';
import Snackbar from '../../SnackBar/SnackBar';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import "./EventHost.scss";
import EndPointLoader from '../../EndPointLoader/EndPointLoader';

function EventHost(props) {

    const [eventData, seteventData] = useState(props.eventData);

    const [MessageHandler, setMessageHandler] = useState({ message: '', status: true });

    const [open, setOpen] = React.useState(false);

    const [showLoader, setshowLoader] = useState(false);
    const [uploadPercentage, setuploadPercentage] = useState(0);

    const uploadProgressOptions = {
        onUploadProgress: (progressEvent) => {
          const {loaded, total} = progressEvent;
          let percent = Math.floor( (loaded * 100) / total )
          console.log( `${loaded}bytes of ${total}bytes | ${percent}%` );
          setuploadPercentage(percent);
        }
    }

    const geteventData = (e) => {
        seteventData({ ...eventData, [e.target.name]: e.target.value });
        console.log(eventData);
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
            <Modal className="my-modal" isOpen={props.isEventModalOpen} toggle={props.toggleEventModal} size="lg" backdrop="static">
                <ModalHeader toggle={props.toggleEventModal} className="secondarybackgroundColor" cssModule={{ 'modal-title': 'w-100 text-center' }}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br />
                            <p className="thirdColor fontBoldSmall">Event Creation</p>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody className="backgroundPageColor">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <input type="text" name="eventName" value={eventData} onChange={geteventData} placeholder="Class Name *" />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            {showLoader === true ? <EndPointLoader showLoader={showLoader} uploadPercentage={uploadPercentage} /> : null}
            {open === true ? <Snackbar handleClose={handleClose} status={MessageHandler.status} message={MessageHandler.message} openStatus={open} /> : null}
        </div>
    )
}

export default React.memo(EventHost)