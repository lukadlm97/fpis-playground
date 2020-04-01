import React from 'react'
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import {useStoreState} from '../hooks'
import GuestbookEntryFrom from '../GuestBookEntryForm'
import GuestBook from '../store/GuestBook';

const Home:React.FC = () =>{
   
    const entries = useStoreState(state=>state.guestbook.entries)

    return(
        <div>
            <GuestbookEntryFrom/>
            {
                entries.map((entry)=>(
                <Card >
                <CardContent>
                    <Typography variant="h2">
                    {entry.name}
                    </Typography>
                    <Typography variant="body1">
                    {entry.content}
                    </Typography>
                    <Typography variant="subtitle2">
                    {entry.submitted.toLocaleDateString()}
                    </Typography>
                </CardContent>
                </Card>
                ))
            }
        </div>
    )
}

export default Home;