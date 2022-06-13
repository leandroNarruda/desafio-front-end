import styled from "styled-components";
import { Field, ErrorMessage } from 'formik';

export const StyledIndex = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .st-register-form {
        max-width: 30em;
        width: 100%;
        padding: 0 1em;
    }

    .st-submit-button {
        cursor: pointer;
        background-color: var(--btn-primary-bg) ;
        border: 1px solid var(--btn-primary-border-color);
        border-radius: 0.5em;
        color: var(--btn-primary-color);
        height: 2.5em;
        font-size: 1em;
        width: 100%;
        margin: 1em 0;
    }

    .st-cancel-button {
        cursor: pointer;
        border: 1px solid var(--btn-cancel-bg);
        border-radius: 0.5em;
        color: var( --txt-primary-color);
        height: 2.5em;
        font-size: 1em;
        width: 100%;
        margin: 1em 0;
    }
    .st-cancel-button:hover {
        background-color: var(--btn-cancel-hover);
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
    height: 2.5em;
    margin: 1.1em 0;
    box-sizing: border-box;
    border-radius: 0.5em;
    font-size: 1em;
    padding: 0 1em;
    border: 1px solid var(--btn-primary-border-color);
    border-color: ${props => props.error[props.name] ? 'var(--warning-color)' : 'var(--btn-primary-border-color)'};
    &:focus {
        outline: none;
        border: 1px solid var(--btn-primary-border-color);
        border-color: ${props => props.error[props.name] ? 'var(--warning-color)' : 'var(--btn-primary-border-color)'};
    }
`

export const StyledErrorMessage = styled(ErrorMessage)`
    position: absolute;
    transform: translateY(-15px);
    color: var(--warning-color);
    font-size: .8rem;
    margin: 0;
`
