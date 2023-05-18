import { useContext } from "react"

import { StyleAreaEditor } from "./styles"
import {TextContext} from '../context/TextContext'

export const AreaEditor = () => {
    const {setText} = useContext(TextContext);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return(
        <>
            <StyleAreaEditor defaultValue={""} onChange={handleChange} />
        </>
    )
}