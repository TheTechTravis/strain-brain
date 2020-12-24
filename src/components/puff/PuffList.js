import React, { useContext, useEffect } from "react"
import { PuffListContext } from "./PuffListProvider"
import { Strain } from "../strain/Strain"

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
        </>
    )
}