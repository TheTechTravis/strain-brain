import React, { useContext, useEffect } from "react"
import { PuffListContext } from "./PuffListProvider"
import { Strain } from "../strain/Strain"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "../strain/Strain.css"

export const PuffList = (props) => {
    const { strains, getPuffStrains } = useContext(PuffListContext)

    useEffect(() => {
        getPuffStrains()
    }, [])
    console.log(strains)
    console.log(strains[0])

    const currentUser = localStorage.getItem("app_user_id")

    // RENDER THIS
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Puff List</h1>

            <Link to={`/`}>
                <center><Button variant="outline-warning"> Go Home </Button></center>
            </Link>

            <br />
            <br />

            <div className="strains">
                {
                    strains.map(strain => <Strain key={strain.id} strain={strain} />)
                }
            </div>

        </>
    )
}