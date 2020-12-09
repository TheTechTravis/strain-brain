import React from "react"
import "./Location.css"
import Button from "react-bootstrap/Button"

export const Location = ({ location }) => (
    <section className="strain">
        <h3 className="strain__name">{strain.name}</h3>
        <Button variant="info">Details</Button>{' '}
    </section>
)