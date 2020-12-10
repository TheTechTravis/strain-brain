import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { ConditionContext } from "./ConditionProvider"
import { useEffect, useContext } from "react"

export const ConditionForm = () => {

    const { conditions, getConditions } = useContext(ConditionContext)

    /* Get condition state on initialization. */
    useEffect(() => {
        getConditions()
    }, [])

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
                    Map through array of all possible medical conditions and render a dynamically generated checkbox for each.
                */}

                {conditions.map(condition =>
                    <Form.Check type="checkbox" key={condition.id} label={condition.name} id={condition.id} />

                    // Map to see if a checkbox is checked, add that conditionId to array of objects to be POSTed to /userConditions?
                )}
            </div>
        </>
    )
}