import {createStore} from 'easy-peasy'
import GuestBookStore from '../interfaces/GuestBookStore'
import GuestBook from './GuestBook'

const store ={
    guestbook:GuestBook
}

export default createStore<GuestBookStore>(store)