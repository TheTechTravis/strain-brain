import React, { useContext } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import { PuffListContext } from "../puff/PuffListProvider"
import "./Strain.css"

export const StrainOnPuff = ({ strain }) => {
    const { strains, getPuffStrains, deleteFromPuff } = useContext(PuffListContext)

    return (
        <section className="strain">
            <Card style={{ width: '28rem', height: "8rem", borderRadius: "20px", backgroundColor: "#4D744E", border: "2px solid #9DC88D" }}>
                <Card.Title>{<h2>{strain.name}</h2>}</Card.Title>

                <div>
                    <Link key={strain.id} to={`/details/${strain.id}`}>
                        <Button variant="outline-warning" > Details </Button>
                    </Link>

                    <Button variant="outline-warning" onClick={() => deleteFromPuff(strain.id)} > Remove From List </Button>
                </div>
            </Card>
        </section >
    )
}