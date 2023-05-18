import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Manrope', sans-serif;
        font-size: 18px;
    }
`;

export const StyleContainerEditor = styled.section`
    background: hsl(218, 23%, 16%);
    display: grid;
    grid-template-columns: repeat(2, 45%);
    align-items: end;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const StyleEditor = styled.section`
    /* background-color: hsl(217, 19%, 24%); */
    height: calc(100% - 2.5em);
    padding: 20px;
`;

export const StyleAreaEditor = styled.textarea.attrs((props) => ({
    defaultValue: props.defaultValue
}))`
    background: hsl(218, 23%, 16%);
    border: none;
    color: white;
    font-family: 'Manrope', sans-serif;
    font-size: 0.8em;
    height: 100%;
    outline: none;
    /* padding: 20px; */
    resize: none;
    width: 100%;
`;

export const StyleMarkdownResult = styled.section`
    /* background-color: hsl(217, 19%, 24%); */
    color: white;
    border-left: 1px solid hsl(217, 19%, 24%);
    height: calc(100% - 2.5em);
    padding: 20px;
`;