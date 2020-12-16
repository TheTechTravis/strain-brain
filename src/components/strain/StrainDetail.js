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
    }, [strains])

    return (
        <section className="strain">
            {strain.effects
                ? (
                    < Jumbotron fluid>
                        <Container>
                            <h1>{strain.name}</h1>
                            <h4>Description: A description goes here.</h4>
                            <h4>Effects:</h4>
                            <div>
                                <div>
                                    {/* Map through this strain and create a <p> for each positive effect */}
                            Positive
                            {/* {console.log(strain.effects.positive)} */}
                                    {strain.effects.positive.map((effect, index) => <p key={index} style={{ color: 'green' }}>{effect}</p>)}
                                </div>
                                <div>
                                    {/* Map through this strain and create a <p> for each negative effect */}
                            Negative
                            {/* {console.log(strain.effects.negative)} */}
                                    {strain.effects.negative.map((effect, index) => <p key={index} style={{ color: 'red' }}>{effect}</p>)}
                                </div>
                                <div>
                                    {/* Map through this strain and create a <p> for each medical effect */}
                            Medical
                            {/* {console.log(strain.effects.medical)} */}
                                    {strain.effects.medical.map((effect, index) => <p key={index} style={{ color: 'blue' }}>{effect}</p>)}
                                </div>
                            </div>

                            <Link key={strain.id} to={`/details/form/${strain.id}`}>
                                <Button variant="primary" >Add to Puff or Pass List?</Button>
                            </Link>

                        </Container>
                    </Jumbotron>)
                : <h1>Loading...</h1>}
        </section >
    )
}