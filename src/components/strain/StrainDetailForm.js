import React, { useState, useEffect, useContext } from "react"
import { StrainContext } from "./StrainProvider"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"
import { Link } from "react-router-dom"

export const StrainDetailForm = (props) => {
    const { strains, getStrains, addStrain } = useContext(StrainContext)

    const [strain, setStrain] = useState({})

    useEffect(() => {
        getStrains()
    }, [])

    useEffect(() => {
        const strain = strains.find(strain => strain.id === parseInt(props.match.params.strainId)) || {}
        setStrain(strain)
    }, [strains])
    console.log(strain)
    return (
        strain.name ? (
            <Jumbotron fluid>
                <Container>
                    <h1>{strain.name}</h1>
                    <p>Please select one of the options below.</p>

                    {/* Build strain object, POST it to /puff endpoint, and redirect to Puff List when link is clicked */}
                    {console.log(strain)}
                    <Link key={strain.id} id={strain.id} to={`/puff`} onClick={() => addStrain(strain, "puff")}>
                        <p>Add to Puff List?</p>
                    </Link>

                    {/* Build strain object, POST it to /pass endpoint, and redirect to Puff List when link is clicked */}
                    <Link key={strain.id} id={strain.id} to={`/pass`}>
                        <p>Add to Pass List?</p>
                    </Link>
                </Container>
            </Jumbotron >
        ) : (
                <>
                    <h1 style={{ textAlign: "center", color: "white" }}>Loading...</h1>
                    <div className="text-center">
                        <Spinner animation="border text-warning" role="status">
                        </Spinner>
                    </div>
                </>
            )
    )
}