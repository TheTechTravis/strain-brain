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

    return (
        <Jumbotron fluid>
            <Container>
                <h1>{strain.name}</h1>
                {console.log(strain)}
                <p>Please select one of the options below.</p>

                {/* Build strain object, POST it to /puff endpoint, and redirect to Puff List when link is clicked */}
                <Link key={strain.id} to={`/puff`}>
                    <p>Add to Puff List?</p>
                </Link>

                {/* Build strain object, POST it to /pass endpoint, and redirect to Puff List when link is clicked */}
                <Link key={strain.id} to={`/pass`}>
                    <p>Add to Pass List?</p>
                </Link>
            </Container>
        </Jumbotron>
    )
}