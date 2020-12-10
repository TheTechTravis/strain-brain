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


            {/* Expected Output */}

            {/* <Form>
                <Form.Check type="checkbox" label="Anxiety" id="1" />
                <Form.Check type="checkbox" label="Cramps" id="2" />
                <Form.Check type="checkbox" label="Depression" id="3" />
                <Form.Check type="checkbox" label="Insomnia" id="4" />
                <Form.Check type="checkbox" label="Pain" id="5" />
                <Form.Check type="checkbox" label="Stress" id="6" />
                <Form.Check type="checkbox" label="Lack of Appetite" id="7" />
                <Form.Check type="checkbox" label="Nausea" id="8" />
                <Form.Check type="checkbox" label="Headache" id="9" />
                <Form.Check type="checkbox" label="Fatigue" id="10" />
                <Form.Check type="checkbox" label="Eye Pressure" id="11" />
                <Form.Check type="checkbox" label="Inflammation" id="12" />
                <Form.Check type="checkbox" label="Spasticity" id="13" />
                <Form.Check type="checkbox" label="Seizures" id="14" />
                <Form.Check type="checkbox" label="Muscle Spasms" id="15" />
                <Button variant="primary" onClick={() => console.log("You clicked Save Conditions")}>Save Conditions</Button>{' '}
            </Form> */}
        </div>
    </>
)