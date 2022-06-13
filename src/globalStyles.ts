import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        font-size: 16px;

        /* button */

        --btn-primary-bg: #727cf5;
        --btn-primary-border-color: #c1c5fd;
        --btn-primary-color: #fff;
        --btn-primary-hover-color: #6169d0;
        --btn-header-bg: #732ff9;
        --btn-header-hover: #26095e;
        --btn-cancel-hover: #c3c2c2;
        --btn-cancel-bg: #efefef;

        /* text */

        --txt-primary-color: #6c757d;

        /* table */

        --tr-bg: #f1f3fa;

        /* icons */

        --ico-hover-color: #e91e63;

        --warning-color: #fd7a87;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    @media(max-width: 1200px) {
        :root {
            font-size: 15px;
        }
    }
    @media(max-width: 992px) {
        :root {
            font-size: 14px;
        }
    }
    @media(max-width: 768px) {
        :root {
            font-size: 13px;
        }
    }
    @media(max-width: 576px) {
        :root {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;