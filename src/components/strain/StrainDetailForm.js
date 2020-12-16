import React, { useState, useEffect, useContext } from "react"
import { StrainContext } from "./StrainProvider"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import ButtonGroup from "react-bootstrap/ButtonGroup"

export const StrainDetailForm = (props) => {
    const { strains, getStrains } = useContext(StrainContext)

    const [strain, setStrain] = useState({})

    useEffect(() => {
        getStrains()
    }, [])

    useEffect(() => {
        const strain = strains.find(strain => strain.id === parseInt(props.match.params.strainId)) || {}
        setStrain(strain)
    }, [strains])

    /*
        This is starter code for a function that dictates
        what will happen when User clicks on a checkbox
    */
    /* const handleCheckbox = (event) => {
        let activeUserId = +localStorage.getItem('app_user_id');

        if (event.target.checked) {
            // if checked -> POST strain info to /strains endpoint in database
            addStrainIdToList({
                name: "",
                strainId: +strain.id,
                noteContent: "",
                userId: +activeUserId,
                isPuffed: true
            })
        }
        else {
            // if unchecked -> DELETE strain from /strain endpoint in database
            deleteUserConditionId(+event.target.id)
        }
    } */



    const ToggleButton = () => {
        const [radioValue, setRadioValue] = useState('3');

        const radios = [
            { name: 'Add to Puff List', value: '1' },
            { name: 'Add to Pass List', value: '2' },
            { name: 'Remove from Puff/Pass List', value: '3' },
        ];

        return (
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="primary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        );
    }


    return (
        <Jumbotron fluid>
            <Container>
                <h1>{strain.name}</h1>
                {console.log(strain)}
                <p>
                    Please select one of the options below.
                </p>


                <Form.Check type="checkbox" label={"Add to Puff List"} id={strain.id} /> {/*onChange={handleCheckbox}*/}
                <Form.Check type="checkbox" label={"Add to Pass List"} id={strain.id} />
                <Form.Check type="checkbox" label={"Remove from Puff/Pass List"} id={strain.id} />
            </Container>
        </Jumbotron>
    )
}