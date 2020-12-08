import React from "react"
import { Route } from "react-router-dom"
import { StrainBrainNavbar } from "./navbar/StrainBrainNavbar"
import { StrainProvider } from "./strain/StrainProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render filtered list of strains on home view */}
            <StrainProvider>
                <Route exact path="/">
                    <div>Test</div>
                </Route>
            </StrainProvider>
        </>
    )
}