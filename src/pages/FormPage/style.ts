import styled from "styled-components";
import { Field, ErrorMessage } from 'formik';

export const StyledIndex = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .st-register-form {
        max-width: 37.5em;
        width: 100%;
        padding: 0 1em;
    }

    .st-submit-button {
        cursor: pointer;
        background-color: var(--btn-primary-bg) ;
        border: 1px solid var(--btn-primary-border-color);
        border-radius: 0.5em;
        color: var(--btn-primary-color);
        height: 3em;
        font-size: 1.5em;
        width: 100%;
        margin: 1em 0;
    }

    .st-submit-button:hover {
        background-color: var(--btn-primary-hover-color);
     }

    .st-input-field {
        width: 100%;
        height: 3em;
        margin: 1em 0;
        box-sizing: border-box;
        border: 1px solid var(--btn-primary-border-color);
        border-radius: 0.5em;
        font-size: 1.5em;
        padding: 0 1em;
    }

`

export const StyledField = styled(Field)`
    width: 100%;
    height: 3em;
    margin: ${props => props.error[props.name] ? '1em 0 .6em 0' : '1em 0'} ;
    box-sizing: border-box;
    border: 1px solid var(--btn-primary-border-color);
    border-radius: 0.5em;
    font-size: 1.5em;
    padding: 0 1em;
    border-color: ${props => props.error[props.name] ? 'red' : 'var(--btn-primary-border-color)'};
    &:focus {
        outline: none;
        border: 1px solid rgb(2, 132, 235);
    }
`

export const StyledErrorMessage = styled(ErrorMessage)`
    color: red;
    font-size: .7rem;
    margin: 0;
`
