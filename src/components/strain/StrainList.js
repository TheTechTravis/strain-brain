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

    return (
        <div className="strains">
            {

                strains.map(strain => {
                    if (strain.effects.medical.includes("Muscle Spasms")) {
                        console.log("This many strains were found that help with the provided ailment")
                        console.log(userConditions)
                        return <Strain key={strain.id} strain={strain.name} />
                    }
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
