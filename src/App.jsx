import { GlobalStyle } from "./components/styles"
import { ContainerEditor } from "./components/ContainerEditor"
import { TextContext } from './context/TextContext';
import { useState } from "react";
import { Header } from "./components/header/Header";

function App() {
    const [text, setText] = useState('');

    return (
        <TextContext.Provider value={
            {
                text,
                setText
            }
        }>
            <GlobalStyle />
            <Header />
            <ContainerEditor />
        </TextContext.Provider>
    )
}

export default App
