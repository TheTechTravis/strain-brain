import React, { useContext, useEffect } from "react"
import { Strain } from "./Strain"
import "./Strain.css"
import "./StrainList.css"
import { StrainContext } from "./StrainProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"
import { ConditionContext } from "../conditions/ConditionProvider"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"

export const StrainList = (props) => {
    // This state changes when `getStrains()` is invoked below
    const { strains, getStrains } = useContext(StrainContext)
    const { userConditions, getUserConditions } = useContext(UserConditionContext)
    const { getConditions } = useContext(ConditionContext)
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
        strains.length > 1900 ? (
            <>
                {strains.filter(strain => strain.effects.medical.find(condition => activeUsersSetConditions.includes(condition))).length === 0 ? (
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0"> Toggle Help </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{ color: "black" }}>Your strain recommendations are dependent on the medical conditons that you set in the "Conditions" tab.<br />Note: You will not see any strain recommendations until you set at least one medical condition.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ) : <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0"> Toggle Help </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body style={{ color: "black" }}>Your strain recommendations are dependent on the medical conditons that you set in the "Conditions" tab.<br />Note: You will not see any strain recommendations until you set at least one medical condition.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>}

                <br />

                <h3 style={{ marginLeft: "1.5rem" }}>Results Found: {
                    strains.filter(strain => strain.effects.medical.find(condition => activeUsersSetConditions.includes(condition))).length
                }
                </h3>
                <div className="strains" style={{ padding: "1rem" }}>

                    {

                        /* 
                            Filter through array of every possible strain from API and only return
                            strains which include at least one active user condition within medical
                            properties of the current iterating strain. 
        
                            NOTE: In the future, lines 61 and 63 can be toggled with a button or
                            some other affordance, so that the User can decide how their results
                            are filtered.
                        */
                        // Line 60 -> renders strains that match ANY user conditions
                        strains.filter(strain => strain.effects.medical.find(condition => activeUsersSetConditions.includes(condition)))
                            // Line 62 -> renders strains that match ALL user conditions
                            // strains.filter(strain => activeUsersSetConditions.every(condition => strain.effects.medical.includes(condition)))
                            .map(strain => <Strain key={strain.id} strain={strain} />)
                    }
                </div>
            </>
        ) : (<>
            <h1 style={{ textAlign: "center", color: "white" }}>Loading Results...</h1>
            <div className="text-center">
                <Spinner animation="border text-warning" role="status">
                </Spinner>
            </div>
        </>
            )
    )
}
