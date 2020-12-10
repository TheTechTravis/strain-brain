import React, { useState, useEffect } from "react"

/*
    These contexts are imported and used by individual components that need data.
*/
export const ConditionContext = React.createContext()
export const UserConditionContext = React.createContext()

/*
    This component establishes what data can be used.
 */
export const ConditionProvider = (props) => {
    const [conditions, setConditions] = useState([])

    const getConditions = () => {
        return fetch("http://localhost:8088/conditions")
            .then(res => res.json())
            .then(setConditions)
    }

    /*
        Return a context provider which has the `conditions` state and the `getConditions` function as keys.
        This allows any child elements to access them.
    */
    return (
        <ConditionContext.Provider value={{
            conditions, getConditions
        }}>
            {props.children}
        </ConditionContext.Provider>
    )
}

export const UserConditionProvider = (props) => {
    const [userConditions, setUserConditions] = useState([])

    const getUserConditions = () => {
        return fetch("http://localhost:8088/userConditions")
            .then(res => res.json())
            .then(setUserConditions)
    }

    /*
        Return a context provider which has the `userConditions` state and the `getUserConditions` function as keys.
        This allows any child elements to access them.
    */
    return (
        <UserConditionContext.Provider value={{
            userConditions, getUserConditions
        }}>
            {props.children}
        </UserConditionContext.Provider>
    )
}