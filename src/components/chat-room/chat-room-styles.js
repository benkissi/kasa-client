import styled from 'styled-components'

export const Wrapper = styled.div`
    display:flex;
    width: 100%;
    height: 100vh;
`

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    max-width: 300px;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    background-color: #0b0e31;
    color: white;

    p {
        margin: 0;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Chatbox = styled.div`
    display: flex;
    background-color: #eee;
    width: 100%;
    min-height: 70px;
    margin-top: auto;
    padding: 10px;
    align-items:center;
    box-sizing: border-box;

    .input {
        width: 98%;
    }

    .button {
        margin-left: 10px;
        max-width: 100px;
    }
`

export const ChatWindow = styled.div`
    height: 100%;
`
