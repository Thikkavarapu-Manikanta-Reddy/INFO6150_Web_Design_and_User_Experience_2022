import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SnackBar(props) {

    const {handleClose, status , message, openStatus} = props;

    return (
        <div>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }} open={openStatus} autoHideDuration={3000} onClose={handleClose}>
                {
                    status === true ?
                        <Alert onClose={handleClose} severity="success">
                            {message}
                        </Alert> :
                        <Alert onClose={handleClose} severity="error">
                            {message}
                        </Alert>
                }
            </Snackbar>
        </div>
    )
}

export default React.memo(SnackBar)