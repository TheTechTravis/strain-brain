import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import "./Strain.css"


export const Strain = ({ strain }) => (
    <section className="strain">
        <Card style={{ width: '28rem', height: "8rem", borderRadius: "20px", backgroundColor: "#4D744E", border: "2px solid #9DC88D" }}>
            <Card.Title>{<h2>{strain.name}</h2>}</Card.Title>
            <Link key={strain.id} to={`/details/${strain.id}`}>
                <Button variant="outline-warning" >Details</Button>
            </Link>
        </Card>
    </section >
)