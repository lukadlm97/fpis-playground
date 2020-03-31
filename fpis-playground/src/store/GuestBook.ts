import GuestBookModel from '../interfaces/GuestBookModel'

const GuestBook:GuestBookModel ={
    entries:[{
        name:'Luka',
        content:'Hello World',
        submitted:new Date()
    }]
};

export default GuestBook