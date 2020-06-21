import React, {useState, useEffect} from 'react'
import SocketContext from './socket-context'

import {initSockets} from './index'

const SocketProvider = ({children}) => {
    const [socketStore, setSocketStore] = useState({newMessage:'', users: []})

    useEffect(() => initSockets(setSocketStore), [initSockets])

    return (
        <SocketContext.Provider value={{socketStore}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider