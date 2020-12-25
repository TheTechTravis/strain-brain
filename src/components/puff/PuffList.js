import React, { useContext, useEffect } from "react"
import { PuffListContext } from "./PuffListProvider"
import { Strain } from "../strain/Strain"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

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
            <h1>Puff List</h1>
            {
                strains.map(strain => <Strain key={strain.id} strain={strain} />)
            }

            <Link to={`/`}>
                <Button variant="outline-warning"> Go Home </Button>
            </Link>
        </>
    )
}