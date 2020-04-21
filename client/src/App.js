import React from 'react'
import CssBaseLine from '@material-ui/core/CssBaseline'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid'
import NavBar from './components/NavBar'

 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}))


const App = () => {
    const classes = useStyles()
    return (
         <Grid container className={classes.root}>
           <CssBaseLine />
           <NavBar />
        </Grid>
    )
}
export default App