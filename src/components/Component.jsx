import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

export const Component = ({children, languaje}) => {
    return(
        <SyntaxHighlighter language={languaje ?? null} style={docco}>
            {children ?? ''}
        </SyntaxHighlighter>
    )
}