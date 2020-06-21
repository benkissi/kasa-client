import React, { useState, useEffect } from "react";
import SocketProvider from "./socket/socket-provider";
import {AppContext} from "./AppContext"

import JoinRoom from "./components/join-room";
import ChatRoom from "./components/chat-room";

import {addUserToRoom, sendMessage}from './socket/emit'
import './App.css'

function App() {
  const INITIAL_STATE = {
    hasJoinedRoom: false,
    name: "",
    room: "",
    joinError: {
      status: false,
      message: ''
    }
  };
  const [state, setState] = useState(INITIAL_STATE);

  const handleJoin = () => {
    addUserToRoom(state.name, state.room, setState)
  }

  const handleSendMessage = (message) => {
    sendMessage(message)
  }
  const content = state.hasJoinedRoom ? <ChatRoom sendMessage={handleSendMessage} /> : <JoinRoom handleJoin={handleJoin} />;
  return(
    <SocketProvider >
      <AppContext.Provider value={{state, setState}}>
        <div>{content}</div>
      </AppContext.Provider>
    </SocketProvider>
  )
  
}

export default App;
