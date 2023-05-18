import { useContext } from "react";
import ReactMarkdown from "react-markdown";

import { TextContext } from "../context/TextContext";
import { StyleMarkdownResult } from "./styles";
import { Component } from "./Component";

export const MarkdownResult = () => {
    const {text} = useContext(TextContext);

    return(
        <StyleMarkdownResult>
            <ReactMarkdown children={text} components={{
                code: Component
            }} />
        </StyleMarkdownResult>
    )
}