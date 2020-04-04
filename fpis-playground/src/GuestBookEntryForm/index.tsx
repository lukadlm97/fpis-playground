import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

const GuestBookEntryForm = ()=>{
    const classes = useStyles()

    return(
        <form className={classes.formContainer} noValidate>
            <TextField label="Name" name="name" variant="outlined" fullWidth/>
            <TextField multiline rows={3} label="Content" variant="outlined" name="contant" fullWidth/>
            <Box display="flex" justifyContent="flex-end">

            <Button color="primary" variant="contained" >Add Entry</Button>
      
            </Box>
       </form>
    )
};

export default GuestBookEntryForm;