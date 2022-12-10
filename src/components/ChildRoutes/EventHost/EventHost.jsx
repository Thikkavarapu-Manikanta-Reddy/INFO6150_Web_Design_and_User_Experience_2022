import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../../configs/axiosConfig';
import Snackbar from '../../SnackBar/SnackBar';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import "./EventHost.scss";
import EndPointLoader from '../../EndPointLoader/EndPointLoader';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button';
import eventCreation from "../../../assets/event_creation.svg";
import Divider from '@mui/material/Divider';
import { v1 as uuidv1 } from 'uuid';

function EventHost(props) {

    const [dateAndTimeValue, setDateAndTimeValue] = React.useState(dayjs(new Date()));

    const [actionStatus, setActionStatus] = useState(null);

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const handleDateAndTimeChange = (newValue) => {
        setDateAndTimeValue(newValue);
        let dateAndTime = constructDateAndTimeString(newValue);
        console.log(dateAndTime, typeof newValue);
        setEventData({ ...eventData, dateAndTimeObj: newValue, dateAndTime: dateAndTime });
    };

    const closeModal = () => {
        props.toggleEventModal();
        props.eventsDisplay();
    }

    const constructDateAndTimeString = (dateObj) => {
        let hour, amOrPm;
        if (dateObj.$H > 12) {
            hour = dateObj.$H - 12;
            amOrPm = "pm";
        }
        else {
            hour = dateObj.$H;
            amOrPm = "am";
        }
        return `${dateObj.$D}` + " " + `${month[dateObj.$M]}` + " " + `${dateObj.$y}` + " - " + `${hour}` + ":" + `${dateObj.$m}` + " " + `${amOrPm}`;
    }

    const [eventData, setEventData] = useState({
        id: uuidv1(),
        title: '',
        type: '',
        description: '',
        ticketCount: '',
        dateAndTime: '',
        dateAndTimeObj: '',
        location: '',
    });

    const eventTypes = [
        {
            id: 1,
            name: 'Food'
        },
        {
            id: 2,
            name: 'Movie'
        },
        {
            id: 3,
            name: 'Music'
        },
        {
            id: 4,
            name: 'Entertainment'
        }
    ];

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

    const saveEvent = () => {
        console.log(eventData);
        let isSubscribed = true;

        let payload = eventData;
        payload.status = actionStatus;

        setshowLoader(true);
        axios.post('/postEvent', payload, uploadProgressOptions)
            .then(response => {
                console.log(response);
                if (isSubscribed === true) {
                    if (response.data.success === true) {
                        setMessageHandler({ ...MessageHandler, message: response.data.message, status: true });
                        setTimeout(() => {
                            props.eventsDisplay();
                            props.toggleEventModal();
                        }, 1000);
                        handleClick();
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

    const getEventData = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
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

    useEffect(() => {
        console.log(eventData);
        if (props.selectedEventData) {
            console.log(props);
            setActionStatus("Edit");
            setEventData(props.selectedEventData);
            setDateAndTimeValue(props.selectedEventData.dateAndTimeObj);
        }
        else {
            setActionStatus("Create");
            handleDateAndTimeChange(dateAndTimeValue)
        }
    }, [])

    return (
        <div className="poppinsFont">
            <Modal className="my-modal" isOpen={props.isEventModalOpen} toggle={props.toggleEventModal} size="lg" backdrop="static">
                <ModalBody className="backgroundPageColor">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <p className="secondary-color fontBoldSmall">Event Creation</p>
                            <hr style={{ width: "30%", margin: "0" }} />
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <CancelIcon onClick={closeModal} className="secondary-color" style={{ float: "right", cursor: "pointer" }} fontSize="large" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <img className="imageSize" src={eventCreation} alt="Not_Found" /><br />
                        </div>
                        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
                            <Divider style={{ height: "100%" }} orientation="vertical" flexItem />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><br />
                                    <TextField
                                        autoComplete="event-title"
                                        name="title"
                                        required
                                        fullWidth
                                        id="eventTitle"
                                        label="Event Title"
                                        autoFocus
                                        placeholder="Event Title" type="text" value={eventData.title} onChange={getEventData}
                                    />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><br />
                                    <FormControl variant="outlined" style={{ width: "100%" }}>
                                        <InputLabel id="demo-simple-select-outlined-label">Event Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            label="Event Type"
                                            value={eventData.type}
                                            onChange={getEventData}
                                            inputProps={{
                                                name: "type"
                                            }}
                                            style={{ height: "50px" }}
                                        >
                                            {eventTypes.map((option, index) => (
                                                <MenuItem id={index} key={option.id} value={option.name}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br />
                                    <TextareaAutosize
                                        name="description"
                                        onChange={getEventData}
                                        aria-label="empty textarea"
                                        placeholder="Description"
                                        minRows={5}
                                        value={eventData.description}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br />
                                    <TextField
                                        autoComplete="location"
                                        name="location"
                                        required
                                        fullWidth
                                        id="location"
                                        label="Location"
                                        placeholder="Location" type="text" value={eventData.location} onChange={getEventData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center"><br />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            label="Date&Time picker"
                                            value={dateAndTimeValue}
                                            onChange={handleDateAndTimeChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><br />
                                    <TextField
                                        autoComplete="ticket-count"
                                        name="ticketCount"
                                        required
                                        fullWidth
                                        id="ticketCount"
                                        label="Ticket Count"
                                        placeholder="Ticket Count" type="text" value={eventData.ticketCount} onChange={getEventData}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"><br />
                                    <div style={{ float: "right" }}>
                                        <Button disabled={
                                            eventData.title === '' ||
                                            eventData.type === '' ||
                                            eventData.description === '' ||
                                            eventData.dateAndTime === '' ||
                                            eventData.ticketCount === ''
                                        }
                                            className={
                                                eventData.title === '' ||
                                                    eventData.type === '' ||
                                                    eventData.description === '' ||
                                                    eventData.dateAndTime === '' ||
                                                    eventData.ticketCount === ''
                                                    ? null : "enableButtonSecondaryColors"}
                                            onClick={saveEvent} style={{ fontSize: "100%", borderRadius: "8px" }} variant="contained">Save</Button>&nbsp;&nbsp;&nbsp;
                                        <Button
                                            className="enableButtonSecondaryColors"
                                            onClick={closeModal} style={{ fontSize: "100%", borderRadius: "8px" }} variant="contained">Cancel</Button>
                                    </div>
                                    <br />
                                </div>
                            </div>
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