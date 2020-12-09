import React from "react"
// import "./.css"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"



export const Strain = ({ strain }) => (
    <section className="strain">
        <Card style={{ width: '18rem' }}>
            <Card.Title>{strain}</Card.Title>
            <Button variant="info">Details</Button>{' '}
        </Card>
    </section >
)