import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { Strain } from "./Strain"
import "./Strain.css"
import { StrainContext } from "./StrainProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"
import { ConditionContext } from "../conditions/ConditionProvider"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const StrainList = (props) => {
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
        getStrains()
        getUserConditions()
        getConditions()
    }, [])

    const currentUser = localStorage.getItem("app_user_id")
    const activeUserConditions = userConditions.filter(uc => +currentUser === uc.userId)
    const activeUsersSetConditions = activeUserConditions.map(auc => auc.condition.name)

    return (
        <>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">Click for Help</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Your strain recommendations are dependent on the medical conditons that you set in the "Conditions" tab.<br />Note: You will not see any strain recommendations until you set at least one medical condition.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
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
        </>
    )
}
