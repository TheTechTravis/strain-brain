import React, { useContext, useEffect } from "react"
import { Strain } from "./Strain"
import "./Strain.css"
import { StrainContext } from "./StrainProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"

export const StrainList = () => {
    // This state changes when `getStrains()` is invoked below
    const { strains, getStrains } = useContext(StrainContext)
    const { userConditions, getUserConditions } = useContext(UserConditionContext)
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

    return (
        <div className="strains">
            {
                Object.keys(strains).map(strain => <Strain key={strain.id} strain={strain} />)
            }
        </div>
    )
}
