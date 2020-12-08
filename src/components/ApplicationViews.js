import React from "react"
import { Route } from "react-router-dom"
import { StrainBrainNavbar } from "./navbar/StrainBrainNavbar"
import { StrainProvider } from "./strain/StrainProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            { /* Render all strains by default when at root of project */}
            <StrainProvider>
                <Route exact path="/">

                    {/* Render filtered list of strains on home view */}

                </Route>
            </StrainProvider>
        </>
    )
}