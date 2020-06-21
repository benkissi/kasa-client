import {socket} from './index'

export const socketEvents = (setSocketStore) => {
    socket.on('connected', (message) => {
        setSocketStore(prevState => {
            return {
             ...prevState,
             newMessage: message
            } 
         })
        console.log('welcome message', message)
    })

    socket.on('message', (message) => {
        setSocketStore(prevState => {
           return {
            ...prevState,
            newMessage: message
           } 
        })
    })

    socket.on('roomInfo', ({room, users}) => {
        setSocketStore(prevState => {
            return {
             ...prevState,
             users: users
            } 
         })
    })
}