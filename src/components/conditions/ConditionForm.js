import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { ConditionContext } from "./ConditionProvider"
import { UserConditionContext } from "../userConditions/UserConditionProvider"
import { useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "./ConditionForm.css"

export const ConditionForm = () => {

    const { conditions, getConditions } = useContext(ConditionContext)
    const { userConditions, getUserConditions, addUserConditionId, deleteUserConditionId } = useContext(UserConditionContext)

    /* Get condition state on initialization. */
    useEffect(() => {
        getConditions()
    }, [])

    useEffect(() => {
        getUserConditions()
    }, [userConditions])

    const handleCheckbox = (event) => {
        let userId = +localStorage.getItem("app_user_id");
        console.log(
            "userId:",
            userId,
            ", conditionId:",
            event.target.id,
            ", posted to /userConditions endpoint. Checked status:",
            event.target.checked
        );
        if (event.target.checked) {
            // POST userId & conditionId to database
            addUserConditionId({
                // id: parseInt(event.target.id),
                conditionId: parseInt(event.target.id),
                userId: parseInt(userId),
            });
        } else if (event.target.checked === false) {
            // DELETE userID & conditionId from database
            deleteUserConditionId(parseInt(event.target.id));
        } else {
            return (event.target.checked = false);
        }
    };

    return (
        <>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">Click for Help</Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body style={{ color: "black" }}>Please select any ailment/condition(s) below that apply to you.<br />Note: These values will be used to provide you with a personalized list of recommended cannabis strains.</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className="conditionsForm">
                {/* Click for Help dropdown */}

                {/* 
                    Map through array of all possible medical conditions from database.json and render a dynamically generated checkbox for each.
                */}

                {conditions.map(condition => {
                    const foundUserCondition = userConditions.find(uc => uc.conditionId === condition.id && uc.userId === +localStorage.getItem("app_user_id"))

                    if (foundUserCondition) {
                        return (<Form.Check type="checkbox" key={condition.id} label={condition.name} id={foundUserCondition.id} defaultChecked={true} onClick={event => { handleCheckbox(event) }} />
                        )
                    }
                    else {
                        return (
                            <Form.Check type="checkbox" key={condition.id} label={condition.name} id={condition.id} onClick={event => { handleCheckbox(event) }} />
                        )
                    }
                }
                )}

                <br />

                <Link to={`/`}>
                    <Button variant="outline-warning" style={{ marginBottom: "1rem" }}> View Results </Button>
                </Link>
            </div>
        </>
    )
}