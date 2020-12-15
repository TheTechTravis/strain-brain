import React, { useContext, useEffect } from "react"
import { Strain } from "./Strain"
import "./Strain.css"
import { StrainContext } from "./StrainProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"
import { ConditionContext } from "../conditions/ConditionProvider"

export const StrainList = () => {
    // This state changes when `getStrains()` is invoked below
    const { strains, getStrains, getStrainsByCondition } = useContext(StrainContext)
    const { userConditions, getUserConditions } = useContext(UserConditionContext)
    const { conditions, getConditions } = useContext(ConditionContext)
    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("StrainList: Initial render before data")
        getStrains()
        getUserConditions()
        getConditions()
        console.log(strains)
    }, [])

    const currentUser = localStorage.getItem("app_user_id")

    /* // Check all users in database and find userConditions that match current user's
    const userObject = userConditions.find(
        (uc) => parseInt(uc.userId) === currentUser
    )

    // Check each strain's medical properties
    const filteredStrainsByCondition = () => {
        Object.values(strains).map((strain) => {
            (strain.effects.medical).map(() => {
                console.log(userObject)
            })
        })
    } */


    const activeUserConditions = userConditions.filter(uc => +currentUser === uc.userId)
    console.log(activeUserConditions)
    const activeUsersSetConditions = activeUserConditions.map(auc => auc.condition.name)
    console.log(activeUsersSetConditions)

    return (
        <div className="strains">
            {
                /* 
                    Filter through array of every possible strain from API and only return
                    strains which include at least one active user condition within medical
                    properties of the current iterating strain. 

                    NOTE: In the future, lines 61 and 63 can be toggled with a button or
                    some other affordance, so that the User can decide how their results
                    are filtered.
                */
                // Line 61 -> renders strains that match ANY user conditions
                strains.filter(strain => strain.effects.medical.find(condition => activeUsersSetConditions.includes(condition)))
                    // Line 63 -> renders strains that match ALL user conditions
                    // strains.filter(strain => activeUsersSetConditions.every(condition => strain.effects.medical.includes(condition)))
                    .map(strain => <Strain key={strain.id} strain={strain} />)
            }
        </div>
    )
}
