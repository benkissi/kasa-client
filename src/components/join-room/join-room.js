import React, {useContext} from 'react'

import Input from '../input'
import Button from '../button'

import {AppContext} from '../../AppContext'

import {Wrapper, Form} from './join-room-styles'

function JoinRoom (props) {
    const {state, setState} = useContext(AppContext)

    const onInputChange = event => {
        const {name, value} = event.target
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleButtonClick = () => {
        console.log('joined')
        props.handleJoin()
    }
    return (
        <Wrapper>
            <Form> 
                <h2>Join Room</h2>
                <div className="input"> 
                    <Input name="name" placeholder="Name" value={state.name} onChange={onInputChange}/>
                </div>
                <div className="input">
                    <Input name="room" placeholder="Enter room name" value={state.room} onChange={onInputChange}/>
                </div>
                <div className="submit">
                    <Button text='Enter' bgColor="#1f75fe" color="white" handleClick={handleButtonClick}/>
                </div>
            </Form>
            
        </Wrapper>
    )
}

export default JoinRoom