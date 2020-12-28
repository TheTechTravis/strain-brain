import React, { useState } from "react"

export const PassListContext = React.createContext()

export const PassListProvider = (props) => {
    const [strains, setStrains] = useState([])

    const getPassStrains = () => {
        return fetch("http://localhost:8088/pass")
            .then(response => response.json())
            .then(setStrains)
    }

    const deleteFromPass = (strainId) => {
        return fetch(`http://localhost:8088/pass/${strainId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(getPassStrains)
    }

    return (
        <PassListContext.Provider value={{
            strains, getPassStrains, deleteFromPass
        }}>
            {props.children}
        </PassListContext.Provider>
    )
}