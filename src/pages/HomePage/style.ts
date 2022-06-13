import styled from "styled-components";

export const StyledIndex = styled.div`
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: var(--txt-primary-color);
    div {
        overflow-x: auto;
    }
    table {
        border-spacing: 0;
        min-width: 500px;
    }
    .st-tr:nth-child(2n) {
        background-color: var(--tr-bg);
    }
    table th {
        padding: 0.3em 1em;
    }
    table td {
        padding: 0.3em 1em;
        text-align: center;
    }
    .st-icons {
        margin: 0 5px;
        cursor: pointer;
    }
    .st-icons:hover {
        color: var(--ico-hover-color);
        transform: scale(1.1);
    }
`