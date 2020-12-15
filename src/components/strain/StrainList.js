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
                activeUsersSetConditions.map(auc => {


                    // Objective: Map through all strains. If strain includes one of the conditions that a user has checked, render that strain
                    strains.map(strain => {
                        debugger
                        // If the current iterating strain includes a condition from the activeUser's set conditions (Array), continue evaluation.
                        if (strain.effects.medical.includes(auc)) {
                            console.log("This many strains were found that help with the provided ailment")
                            console.log(auc) // This returns EVERY user's conditions. Need to filter to find only activeUser's conditions

                            // filter and return userConditions that match active user's id

                            // Map through all activeUserConditions and match them with conditions.id?

                            // console.log(userConditions.id === conditions.id) // returns true
                            return <Strain key={strain.id} strain={strain} />
                        }
                    })
                })



                /* Object.values(strains).map((strain) => {
                console.log(strains)
                    if (strain.effects.medical.includes("Cramps")) {

                        return Object.keys(strains).map(strain => <Strain key={strain.id} strain={strain} />)

                        // return <Strain key={strain.id} strain={strain} />

                    }
                }) */


                // Object.keys(strains).map(strain => <Strain key={strain.id} strain={strain} />)
            }
        </div>
    )
}
