import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
`

export const ButtonEl = styled.button`
    width: 100%;
    background-color: ${props => props.bgColor? props.bgColor : 'orange'};
    color: ${props => props.color? props.color : 'black'};
    border-radius: 4px;
    border: none;
    padding: 10px;
    cursor: pointer;
`