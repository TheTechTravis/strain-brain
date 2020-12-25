import React, { useState } from "react"

export const PuffListContext = React.createContext()

export const PuffListProvider = (props) => {
    const [strains, setStrains] = useState([])
    const [description, setDescription] = useState({})

    const getPuffStrains = () => {
        return fetch("http://localhost:8088/puff")
            .then(response => response.json())
            .then(setStrains)
    }

    return (
        <PuffListContext.Provider value={{
            strains, getPuffStrains
        }}>
            {props.children}
        </PuffListContext.Provider>
    )
}