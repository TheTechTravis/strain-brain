import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"


export const ConditionForm = () => (
    <>
        <div className="conditionsForm">
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

            <Form>
                <Form.Check type="checkbox" label="Anxiety" />
                <Form.Check type="checkbox" label="Cramps" />
                <Form.Check type="checkbox" label="Depression" />
                <Form.Check type="checkbox" label="Insomnia" />
                <Form.Check type="checkbox" label="Pain" />
                <Form.Check type="checkbox" label="Stress" />
                <Form.Check type="checkbox" label="Lack of Appetite" />
                <Form.Check type="checkbox" label="Nausea" />
                <Form.Check type="checkbox" label="Headache" />
                <Form.Check type="checkbox" label="Fatigue" />
                <Form.Check type="checkbox" label="Eye Pressure" />
                <Form.Check type="checkbox" label="Inflammation" />
                <Form.Check type="checkbox" label="Spasticity" />
                <Form.Check type="checkbox" label="Seizures" />
                <Form.Check type="checkbox" label="Muscle Spasms" />
                <Button variant="primary" onClick={() => console.log("You clicked Save Conditions")}>Save Conditions</Button>{' '}
            </Form>
        </div>
    </>
)