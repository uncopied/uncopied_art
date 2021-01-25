import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Montserrat-Regular;
    }

    body {
        margin: 0;
        padding: 0;
        color: #333;
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: "Montserrat-Regular";
        padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    select.form-control,
    textarea.form-control,
    input.form-control {
        font-size: 1rem;
    }
    input[type=file] {
        width: 100%;
    }
`;