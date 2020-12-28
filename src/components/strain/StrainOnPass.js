import React, { useContext } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { PassListContext } from "../pass/PassListProvider"
import "./Strain.css"

export const StrainOnPass = ({ strain }) => {
    const { strains, getPassStrains, deleteFromPass } = useContext(PassListContext)

    return (
        <section className="strain">
            <Card style={{ width: '28rem', height: "8rem", borderRadius: "20px", backgroundColor: "#4D744E", border: "2px solid #9DC88D" }}>
                <Card.Title>{<h2>{strain.name}</h2>}</Card.Title>

                <div>
                    <Link key={strain.id} to={`/details/${strain.id}`}>
                        <Button variant="outline-warning" > Details </Button>
                    </Link>

                    <Button variant="outline-warning" onClick={() => deleteFromPass(strain.id)} > Remove From List </Button>
                </div>
            </Card>
        </section >
    )
}