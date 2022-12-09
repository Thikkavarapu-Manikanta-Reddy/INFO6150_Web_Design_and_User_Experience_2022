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

function EventHost(props) {

    const [dateAndTimeValue, setDateAndTimeValue] = React.useState(dayjs(new Date()));

    const handleDateAndTimeChange = (newValue) => {
        setDateAndTimeValue(newValue);
    };

    const [eventData, setEventData] = useState({
        title: '',
        type: '',
        description: '',
        ticketCount: '',
        dateAndTime: '',
        location: ''
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

    return (
        <div className="poppinsFont">
            <Modal className="my-modal" isOpen={props.isEventModalOpen} toggle={props.toggleEventModal} size="lg" backdrop="static">
                <ModalBody className="backgroundPageColor">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <p className="secondary-color fontBoldSmall">Event Creation</p>
                            <hr style={{ width: "20%", margin: "0" }} />
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <CancelIcon onClick={props.toggleEventModal} className="secondary-color" style={{ float: "right", cursor: "pointer" }} fontSize="large" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><br />
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
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><br />
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
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8"><br />
                            <TextareaAutosize
                                name="description"
                                onChange={getEventData}
                                aria-label="empty textarea"
                                placeholder="Description"
                                minRows={5}
                                style={{ width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><br />
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
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><br />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    label="Date&Time picker"
                                    value={dateAndTimeValue}
                                    onChange={handleDateAndTimeChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
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