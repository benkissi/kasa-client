import {socket} from './index'

export const addUserToRoom = (username, room, setState) => {
    socket.emit('join', {username, room}, (error) => {
        if(error){
            console.log(error)
            return setState(prevState => {
                return {
                    ...prevState,
                    joinError: {
                        status: true,
                        message: error
                    }
                    
                }
            })
        }

        setState(prevState => {
            return {
                ...prevState,
                hasJoinedRoom: true,
                joinError: {
                    status: false,
                    message:''
                }
                
            }
        })
    })
}

export const sendMessage = (message) => {
    socket.emit('sendMessage', message, (error) => {
        if(error){
            console.log('error',error)
        }
    })
}