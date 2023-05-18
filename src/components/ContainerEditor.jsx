import { Editor } from "./Editor"
import { AreaEditor } from "./AreaEditor"
import { MarkdownResult } from "./MarkdownResult"
import { StyleContainerEditor } from "./styles"

export const ContainerEditor = () => {
    return (
        <StyleContainerEditor>
            <Editor>
                <AreaEditor />
            </Editor>
            <MarkdownResult />
        </StyleContainerEditor>
    )
}