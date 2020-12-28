import React, { useContext, useEffect } from "react"
import { PassListContext } from "./PassListProvider"
import { Strain } from "../strain/Strain"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "../strain/Strain.css"
import { StrainOnPass } from "../strain/StrainOnPass"

export const PassList = (props) => {
    const { strains, getPassStrains } = useContext(PassListContext)

    useEffect(() => {
        getPassStrains()
    }, [])
    console.log(strains)
    console.log(strains[0])

    const currentUser = localStorage.getItem("app_user_id")

    // RENDER THIS
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Pass List</h1>

            <Link to={`/`}>
                <center><Button variant="outline-warning"> Go Home </Button></center>
            </Link>

            <br />
            <br />

            <div className="strains">
                {
                    strains.map(strain => <StrainOnPass key={strain.id} strain={strain} />)
                }
            </div>

        </>
    )
}