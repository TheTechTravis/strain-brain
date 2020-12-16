import React from "react"
// import "./.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import "./Strain.css"


export const Strain = ({ strain }) => (
    <section className="strain">
        <Card style={{ width: '18rem' }}>
            <Card.Title>{strain.name}</Card.Title>
            <Link key={strain.id} to={`/details/${strain.id}`}>
                <Button variant="info" >Details</Button>
            </Link>
        </Card>
    </section >
)