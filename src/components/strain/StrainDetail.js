import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { StrainContext } from "./StrainProvider"
import "./Strain.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const StrainDetail = (props) => {
    const { strains, getStrains } = useContext(StrainContext)

    const [strain, setStrain] = useState({})

    useEffect(() => {
        getStrains()
    }, [])

    useEffect(() => {
        const strain = strains.find(strain => strain.id === parseInt(props.match.params.strainId)) || {}
        setStrain(strain)
    }, [])

    return (
        <section className="strain">
            <Jumbotron fluid>
                <Container>
                    <h1>{strain.name}</h1>
                    <h4>Description: A description goes here.</h4>
                    <h4>Effects:</h4>
                    <div>
                        <div>
                            {/* Map through this strain and create a <p> for each positive effect */}
                            Positive
                            {/* {strain.effects.positive.map(effect => <p>{effect}</p>)} */}
                        </div>
                        <div>
                            {/* Map through this strain and create a <p> for each negative effect */}
                            {/* {strain.effects.negative.map(effect => <p>{effect}</p>)} */}
                            Negative
                        </div>
                        <div>
                            {/* Map through this strain and create a <p> for each medical effect */}
                            {/* {strain.effects.medical.map(effect => <p>{effect}</p>)} */}
                            Medical
                        </div>
                    </div>

                    <Link key={strain.id} to={`/details/form/${strain.id}`}>
                        <Button variant="primary" >Add to Puff or Pass List?</Button>
                    </Link>

                </Container>
            </Jumbotron>


            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{strain.name}</Card.Title>
                    <Link key={strain.id} to={`/details/form/${strain.id}`}>
                        <Button variant="info" >Add to Puff/Pass?</Button>
                    </Link>
                </Card.Body>
            </Card>

        </section >
    )
}