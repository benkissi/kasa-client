import React, { useEffect, useState, useContext, createRef } from "react";
import { AppContext } from "../../AppContext";
import SocketContext from "../../socket/socket-context";
import Button from "../button";
import Message from "../message";

import Input from "../input";

import {
  Wrapper,
  Sidebar,
  Content,
  Chatbox,
  ChatWindow,
} from "./chat-room-styles";

function ChatRoom({ sendMessage }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { state } = useContext(AppContext);
  const { socketStore } = useContext(SocketContext);
  const { newMessage } = socketStore;
  const chatWindowElement = createRef();

  useEffect(() => {
    setMessages([...messages, newMessage]);
  }, [newMessage]);

  const handleSetMessage = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSendMessage = () => {
    sendMessage(message)
    setMessage('')
  }

  const handleEnter = (event) => {
    if(event.keyCode == 13){
      handleSendMessage()
    }
  }

  return (
    <Wrapper>
      <Sidebar>
        <h2>Room: {state.room}</h2>
        <h3>Current members</h3>
        {socketStore.users.map((user, index) => (
          <p key={index}>{user}</p>
        ))}
      </Sidebar>
      <Content>
        <ChatWindow id="chat-window" ref={chatWindowElement}>
          {messages.map((message, index) => (
            <Message
              key={index}
              message={message.text}
              name={message.username}
              date={message.createdAt}
            />
          ))}
        </ChatWindow>
        <Chatbox>
          <div className="input">
            <Input
              onKeyDown={handleEnter}
              value={message}
              onChange={handleSetMessage}
              placeholder="Type message"
            />
          </div>
          <div className="button">
            <Button
              text="Send"
              bgColor="#1f75fe"
              color="white"
              handleClick={handleSendMessage}
            />
          </div>
        </Chatbox>
      </Content>
    </Wrapper>
  );
}

export default ChatRoom;
