import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StrainContext } from "./StrainProvider";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/* 
    getBoth() returns an array of arrays. Sub[0]
    is the array of all strains from API. Sub[1]
    is my strain description.
*/
export const StrainDetail = (props) => {
    const {
        getBoth,
        strains,
        getStrains,
        description,
        getStrainDescriptionById,
    } = useContext(StrainContext);
    const [strain, setStrain] = useState({});
    const [strainDescription, setDescription] = useState({});
    useEffect(() => {
        getBoth(props.match.params.strainId)
            .then(data => {
                const arrayOfStrains = Object.keys(data[0]).map(strainKey => {
                    const newStrainObject = data[0][strainKey]
                    newStrainObject.name = strainKey
                    return newStrainObject
                })
                const strain = arrayOfStrains.find(
                    (strain) => strain.id === parseInt(props.match.params.strainId)
                ) || {}
                setStrain(strain);
                setDescription(data[1])
                console.log(data)
            })
    }, []);

    console.log(description);
    return (
        /*
                Use ternary operators to set conditions to render page if data
                is returned from fetch, or display a loading component if data
                has not yet returned.
             */
        <section className="strain">
            {strain.effects ? (
                <Jumbotron fluid>
                    <Container>
                        <h1>{strain.name}</h1>
                        <br />
                        <h3>Strain Description:</h3>
                        <h5>{strainDescription.desc}</h5>
                        <br />

                        <h2>Strain Effects:</h2>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <div style={{ border: "2px solid black", width: "20rem" }}>
                                <h4>Positive:</h4>
                                {/* {console.log(strain.effects.positive)} */}
                                {strain.effects.positive.map((effect, index) => (
                                    <p key={index} style={{ color: "green" }}>
                                        {effect}
                                    </p>
                                ))}
                            </div>
                            <div style={{ border: "2px solid black", width: "20rem" }}>
                                <h4>Negative:</h4>
                                {/* {console.log(strain.effects.negative)} */}
                                {strain.effects.negative.map((effect, index) => (
                                    <p key={index} style={{ color: "red" }}>
                                        {effect}
                                    </p>
                                ))}
                            </div>
                            <div style={{ border: "2px solid black", width: "20rem" }}>
                                <h4>Medical:</h4>
                                {/* {console.log(strain.effects.medical)} */}
                                {strain.effects.medical.map((effect, index) => (
                                    <p key={index} style={{ color: "blue" }}>
                                        {effect}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <br />
                        <Link key={strain.id} to={`/details/form/${strain.id}`}>
                            <Button variant="primary">Add to Puff or Pass List?</Button>
                        </Link>
                    </Container>
                </Jumbotron>
            ) : (
                    <>
                        <h1>Loading Details...</h1>
                        <div className="text-center">
                            <Spinner animation="border text-warning" role="status">
                            </Spinner>
                        </div>
                    </>
                )}
        </section>
    );
};