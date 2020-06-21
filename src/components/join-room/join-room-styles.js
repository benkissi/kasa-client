import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #002e62;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    background-color: white;
    padding: 20px;

    .input {
        width: 100%;
        margin: 10px 0 10px 0;
    }

    .submit {
        width: 100%;
        margin-top: 20px;
    }
`

