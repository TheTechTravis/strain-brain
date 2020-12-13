import React, { useState, useEffect } from "react"

export const UserConditionContext = React.createContext()

export const UserConditionProvider = (props) => {
    const [userConditions, setUserConditions] = useState([])

    const getUserConditions = () => {
        return fetch("http://localhost:8088/userConditions")
            .then(res => res.json())
            .then(setUserConditions)
    }

    const addUserConditionId = userConditionId => {
        return fetch("http://localhost:8088/userConditions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userConditionId)
        })
            .then(getUserConditions)
    }

    const deleteUserConditionId = userConditionId => {
        return fetch(`http://localhost:8088/userConditions/${userConditionId}`, {
            method: "DELETE"
        })
            .then(getUserConditions)
    }

    /*
        Return a context provider which has the `userConditions` state, the `getUserConditions`, and the `addUserCondition` function as keys.
        This allows any child elements to access them.
    */
    return (
        <UserConditionContext.Provider value={{
            userConditions, getUserConditions, addUserConditionId, deleteUserConditionId
        }}>
            {props.children}
        </UserConditionContext.Provider>
    )
}