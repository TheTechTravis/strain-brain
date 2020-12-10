import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { ConditionContext, UserConditionContext } from "./ConditionProvider"
import { useEffect, useContext, useState } from "react"

export const ConditionForm = () => {

    const { conditions, getConditions } = useContext(ConditionContext)
    const { userConditions, getUserConditions, addConditionId } = useContext(UserConditionContext)

    /* Get condition state on initialization. */
    useEffect(() => {
        getConditions()
    }, [])

    useEffect(() => {
        getUserConditions()
    }, [])

    const handleCheckbox = (event) => {
        let userId = localStorage.getItem('app_user_id');

        console.log("userId: ", userId, ", conditionId: ", event.target.id, ", Checked status: ", event.target.checked)



        if (event.target.checked) {
            // POST userId & conditionId to database
            addConditionId({
                conditionId: parseInt(event.target.id),
                userId: parseInt(userId)
            })
        }
        else if (event.target.id.checked === false) {
            // DELETE userID & conditionId from database

        }

    }

    return (
        <>
            <div className="conditionsForm">
                {/* Click for Help dropdown */}
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">Click for Help</Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Please select any ailment/condition(s) below that apply to you.<br />Note: These values will be used to provide you with a personalized list of recommended cannabis strains.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

                {/* 
                    Map through array of all possible medical conditions from database.json and render a dynamically generated checkbox for each.
                */}

                {conditions.map(condition =>
                    <Form.Check type="checkbox" key={condition.id} label={condition.name} id={condition.id} onChange={event => { handleCheckbox(event) }} />
                    // <Form.Check type="checkbox" key={condition.id} label={condition.name} id={userCondition.id} defaultChecked={false} onChange={handleCheckbox} />

                    // Map to see if a checkbox is checked, add that conditionId to array of objects to be POSTed to /userConditions?

                )}
                {/* <Button variant="primary" onClick={() => conditions.map(c => {
                    if (c.checked) {
                        addUserCondition(c.id)
                    }
                })}>Save Conditions</Button>{' '} */}
            </div>
        </>
    )
}

// Add onChange to form
    // if .checked is true
        // POST conditionId to endpoint
    // else 
        // DELETE