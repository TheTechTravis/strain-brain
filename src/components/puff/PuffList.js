import React, { useContext, useEffect } from "react"
import { PuffListContext } from "./PuffListProvider"
import { Strain } from "../strain/Strain"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import "../strain/Strain.css"
import { StrainOnPuff } from "../strain/StrainOnPuff"

export const PuffList = (props) => {
    const { strains, getPuffStrains } = useContext(PuffListContext)

    useEffect(() => {
        getPuffStrains()
    }, [])
    console.log(strains)
    console.log(strains[0])

    const activeUser = +localStorage.getItem("app_user_id")

    // RENDER THIS
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Puff List</h1>

            <Link to={`/`}>
                <center><Button variant="outline-warning"> Go Home </Button></center>
            </Link>

            <br />

            <h3 style={{ marginLeft: "1.5rem" }}>Results Found: {
                strains.filter(strain => strain.userId === activeUser).length
            }
            </h3>

            <br />

            <div className="strains">
                {
                    strains.filter(strain => strain.userId === activeUser).map(strain => <StrainOnPuff key={strain.id} strain={strain} />)
                }
            </div>

        </>
    )
}