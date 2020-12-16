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

    const getStrains = () => {
        return fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/search/all`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => response.json())
            .then(response => {
                const arrayOfStrains = Object.keys(response).map(strainKey => {
                    const newStrainObject = response[strainKey]
                    newStrainObject.name = strainKey
                    return newStrainObject
                })
                setStrains(arrayOfStrains)
            }
            )
    }

    const getStrainsByCondition = (nameOfCondition) => {
        return fetch(`http://strainapi.evanbusse.com/${API_Key.TheStrainAPI}/strains/search/effect/${nameOfCondition}`)
            .then(res => res.json())
            .then(setStrains)
    }

    const addStrain = strain => {
        return fetch("http://localhost:8088/strains", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strain)
        })
            .then(getStrains)
    }

    /*
        You return a context provider which has the `strains` state, the `getStrains` function, and the `addStrains` function as keys. This allows any child elements to access them.
    */
    return (
        <StrainContext.Provider value={{
            strains, getStrains, addStrain, getStrainsByCondition
        }}>
            {props.children}
        </StrainContext.Provider>
    )
}