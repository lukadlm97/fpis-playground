import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'

const GuestBookEntryForm = ()=>{
    const classes = useStyles()

    return(
        <form className={classes.formContainer} noValidate>
            <TextField label="name" name="name" fullWidth/>
        </form>
    )
};

export default GuestBookEntryForm;