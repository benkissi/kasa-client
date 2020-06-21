import React from 'react'

import {Wrapper, ButtonEl} from './button-styles'

function Button ({text, bgColor, color, handleClick}) {
    return (
        <Wrapper>
            <ButtonEl onClick={handleClick} bgColor={bgColor} color={color}>{text}</ButtonEl>
        </Wrapper>
    )
}

export default Button