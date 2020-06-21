import React, {memo} from 'react'

import {timeConverter} from '../../utils'

import {Wrapper, Content, DateEl} from './message-styles'

const Message = memo(function Message ({message, name, date}) {
    const formattedTime = timeConverter(date)
    return (
        <Wrapper>
            <Content>
                <div className="name">
                    {name}
                </div>
                <div className="message">
                    {message}
                </div>
            </Content>
            <DateEl>
                {formattedTime}
            </DateEl>
        </Wrapper>
    )
})

export default Message