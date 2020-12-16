import React, { useState, useEffect, useContext } from "react"
import { StrainContext } from "./StrainProvider"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { Link } from "react-router-dom"

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
                <p>Please select one of the options below.</p>

                {/* Build strain object, POST it to /puff endpoint, and redirect to Puff List when link is clicked */}
                <Link key={strain.id} to={`/details/form/${strain.id}`}>
                    <p>Add to Puff List?</p>
                </Link>

                {/* Build strain object, POST it to /pass endpoint, and redirect to Puff List when link is clicked */}
                <Link key={strain.id} to={`/details/form/${strain.id}`}>
                    <p>Add to Pass List?</p>
                </Link>
            </Container>
        </Jumbotron>
    )
}