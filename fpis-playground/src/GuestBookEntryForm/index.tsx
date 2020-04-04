import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {useForm} from 'react-hook-form'
import GuestBookEntry from '../interfaces/GuestBookEntry'

const GuestBookEntryForm = ()=>{
    const classes = useStyles()
    const {register,handleSubmit} = useForm()
    const onSubmit = (data:GuestBookEntry):void=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}  className={classes.formContainer} noValidate>
            <TextField inputRef={register} label="Name" name="name" variant="outlined" fullWidth/>
            <TextField inputRef={register} multiline rows={3} label="Content" variant="outlined" name="contant" fullWidth/>
            <Box display="flex" justifyContent="flex-end">
                <Button type="submit" color="primary" variant="contained" >Add Entry</Button>
            </Box>
       </form>
    )
};

export default GuestBookEntryForm;