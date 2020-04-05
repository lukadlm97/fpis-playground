import GuestBookModel from '../interfaces/GuestBookModel'
import {action} from 'easy-peasy'
const GuestBook:GuestBookModel ={
    entries:[{
        id:1,
        name:'Luka',
        content:'Hello World',
        submitted:new Date()
    }],
    addEntry:action((state,entry)=>{
        const ids = state.entries.map(ent => ent.id)
        const sorted = ids.sort((a,b)=>a-b)
        const target_id = sorted[sorted.length-1]+1
        entry.id = target_id
        entry.submitted = new Date()
        state.entries.unshift(entry);
    })
};

export default GuestBook