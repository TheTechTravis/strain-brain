import React, { useState } from "react"

export const PuffListContext = React.createContext()

export const PuffListProvider = (props) => {
    const [strains, setStrains] = useState([])

    const getPuffStrains = () => {
        return fetch("http://localhost:8088/puff")
            .then(response => response.json())
            .then(setStrains)
    }

    const deleteFromPuff = (strainId) => {
        return fetch(`http://localhost:8088/puff/${strainId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(getPuffStrains)
    }

    return (
        <PuffListContext.Provider value={{
            strains, getPuffStrains, deleteFromPuff
        }}>
            {props.children}
        </PuffListContext.Provider>
    )
}