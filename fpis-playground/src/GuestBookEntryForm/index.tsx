import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './styles'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import {useForm} from 'react-hook-form'
import GuestBookEntry from '../interfaces/GuestBookEntry'
import * as yup from 'yup'
import {useStoreActions} from '../hooks'

const GuestBookEntrySchema = yup.object().shape({
    name:yup
    .string()
    .trim()
    .required('Required'),
    content:yup
    .string()
    .trim()
    .min(10,'Must be at least 10 characters')
    .max(2000)
    .required(),
});

const GuestBookEntryForm = ()=>{
    const classes = useStyles()
    const {register,handleSubmit,errors,reset} = useForm<GuestBookEntry>({
        validationSchema:GuestBookEntrySchema
    })
    const onSubmit = (data:GuestBookEntry):void=>{
        console.log(data)
        addEntry(data)
        reset()
    }
    const addEntry = useStoreActions(state=>state.guestbook.addEntry)
    return(
        <form onSubmit={handleSubmit(onSubmit)}  className={classes.formContainer} noValidate>
            <TextField 
            inputRef={register} 
            label="Name" 
            name="name" 
            variant="outlined" 
            fullWidth
            error ={!!errors.name}
            helperText = {errors.name?errors.name.message:''}
            />
            <TextField 
            inputRef={register} 
            multiline rows={3} 
            label="Content" 
            variant="outlined" 
            name="content" 
            fullWidth
            error={!!errors.content}
            helperText = {errors.content?errors.content.message:''}
            />
            <Box display="flex" justifyContent="flex-end">
                <Button type="submit" color="primary" variant="contained" >Add Entry</Button>
            </Box>
       </form>
    )
};

export default GuestBookEntryForm;