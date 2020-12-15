import React, { useState, useEffect, useContext } from "react"
import { StrainContext } from "./StrainProvider"
import "./Strain.css"

export const StrainDetail = (props) => {
    const { strains, getStrains } = useContext(StrainContext)

    const [strain, setStrain] = useState({})

    useEffect(() => {
        getStrains()
    })

    useEffect(() => {
        const strain = strains.find(strain => strain.id === parseInt(props.match.params.strainId)) || {}
        setStrain(strain)
    }, [strains])

    return (
        <section className="strain">
            <h3 className="strain__name">{strain.name}</h3>
            <div>Description: </div>
        </section>
    )
}