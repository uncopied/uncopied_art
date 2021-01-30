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
        text-align: center;
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

    .lang{
        border: 1px solid #000;
        border-radius: 2px;
        background-color: #f8f9fa;
    }

    .lang1 {
        text-align: center;
    }

    .btn {
        font-size: 14px;
        padding: 10px 30px;
        margin: 5px;
        border-radius: 4px;
        letter-spacing: 1px;
        font-weight: 500;
        color: #fff;
        border: none;
        text-transform: uppercase;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        display: inline-block; }
      
      .btn:focus,
      .btn:active {
        box-shadow: none;
        outline: none; }
      
      .btn-common {
        background-color: #000;
        position: relative;
        z-index: 1;
        box-shadow: 0px 8px 9px 0px rgba(96, 94, 94, 0.17);
        width: 160px;
        height: 50px;
        padding: 14px 15px; }
      
      .btn-common:hover {
        color: #fff;
        transform: translateY(-2px); }
      
`;