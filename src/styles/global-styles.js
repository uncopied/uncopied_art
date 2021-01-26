import { createGlobalStyle } from 'styled-components';

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

    /*Logo*/

    .logo {
        padding:10px;
    }
    
    .Nav-link{
        margin: 10px;
        font-weight: 600;
        color: #000 !important;
    }
    .Nav-but {
        margin: 10px;
        background-color: #000 !important;
        border: #000 !important;
        padding-left: 20px;
        padding-right: 20px;
    }

    .Nav-but:hover {
        background-color: #505050 !important;
    }
`;