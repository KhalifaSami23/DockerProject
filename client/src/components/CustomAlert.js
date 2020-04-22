import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))


const CustomAlert = props => {
    const classes = useStyles()
    return (
        <Snackbar {...props} autoHideDuration={4000} anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
            <Alert onClose={props.onClose} severity={props.severity} variant="filled" elevation={6}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}
export default CustomAlert