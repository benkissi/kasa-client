import React from 'react'
import {Wrapper, InputEl, Icon} from './Input-styles'

function Input ({icon, ...rest}) {
    return (
        <Wrapper>
            <InputEl {...rest}/>
            {
                icon?<Icon>{icon}</Icon>: ''
            }
            
        </Wrapper>
    )
}

export default Input