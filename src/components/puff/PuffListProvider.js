import React, { useState } from "react"

export const PuffListContext = React.createContext()

export const PuffListProvider = (props) => {
    const [strains, setStrains] = useState([])
    const [description, setDescription] = useState({})

    const getPuffStrains = () => {
        return fetch("http://localhost:8088/puff", {
            // headers: {
            //     "Access-Control-Allow-Origin": "*"
            // }
        })
            .then(response => response.json())
            .then(response => {
                const arrayOfStrains = Object.keys(response).map(strainKey => {
                    const newStrainObject = response[strainKey]
                    newStrainObject.name = strainKey
                    return newStrainObject
                })
                setStrains(arrayOfStrains)
            })
    }

    return (
        <PuffListContext.Provider value={{
            strains, getPuffStrains
        }}>
            {props.children}
        </PuffListContext.Provider>
    )
}