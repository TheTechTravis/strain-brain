import React, { useState, useEffect } from "react"
import { API_Key } from "../../Settings"
/*
    The context is imported and used by individual components that need data
*/
export const StrainContext = React.createContext()
/*
    This component establishes what data can be used.
 */
export const StrainProvider = (props) => {
    const [strains, setStrains] = useState([])
    const [description, setDescription] = useState({})
    const getStrains = () => {
        return fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/search/all`, {
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
    const addStrain = (strain, location) => {
        return fetch(`http://localhost:8088/${location}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strain, location)
        })
            .then(getStrains)
    }
    // This function will get a strain's description for the StrainDetail view
    const getStrainDescriptionById = strainId => {
        return fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/data/desc/${strainId}`, {
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Content-Type": "application/json"
            // }
        })
            .then(res => res.json())
            .then(data => setDescription(data))
    }
    const getBoth = (strainId) => {
        const fetches = [fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/search/all`).then(data => data.json()),
        fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/data/desc/${strainId}`)
            .then(data => data.json())]
        return Promise.all(fetches)
    }


    /*
        You return a context provider which has the `strains` state, the `getStrains` function, and the `addStrains` function as keys. This allows any child elements to access them.
    */
    return (
        <StrainContext.Provider value={{
            strains, description, getStrains, addStrain, getStrainDescriptionById, getBoth
        }}>
            {props.children}
        </StrainContext.Provider>
    )
}