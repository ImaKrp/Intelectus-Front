import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        border: 0;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *:focus {
        outline-style: none;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
    }

    .sr-only {
        position: absolute;
        height: 1px;
        width: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip-path: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }

    ::-webkit-scrollbar {
        width: 0;
    }

    h1, h2, h3, h4, h5, h6, span, p{
    cursor: default;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }
`;
