import React, { useContext, useEffect } from "react"
import { Strain } from "./Strain"
import "./Strain.css"
import { StrainContext } from "./StrainProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"
import { ConditionContext } from "../conditions/ConditionProvider"

export const StrainList = () => {
    // This state changes when `getStrains()` is invoked below
    const { strains, getStrains } = useContext(StrainContext)
    const { userConditions, getUserConditions } = useContext(UserConditionContext)
    const { conditions, getConditions } = useContext(ConditionContext)
    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("StrainList: Initial render before data")
        console.log(strains)
        getStrains()
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the location state changed.
    */
    useEffect(() => {
        console.log("StrainList: Strain state changed")
        console.log(strains)
    }, [strains])

    useEffect(() => {
        getUserConditions()
        console.log("UserConditions: ", userConditions)
    }, [])

    useEffect(() => {
        getConditions()
        console.log("Conditions: ", conditions)
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

    return (
        <div className="strains">
            {
                // userConditions.map(userCondition => console.log((userCondition.conditionId))) // See id of all userConditions in database

                // console.log(userConditions) // See array of all condition names. This will be used to match with userConditions

                Object.values(strains).map((strain) => console.log("Current strain's medical effects: ", strain.effects.medical)  // Drill into medical effects array


                    // Object.keys(strains).map(strain => <Strain key={strain.id} strain={strain} />) // Renders strain cards. Do this if userConditionId match conditionId
                )
            }
        </div>
    )
}
