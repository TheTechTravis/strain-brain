import React from "react"
import { Route } from "react-router-dom"
import { StrainBrainNavbar } from "./navbar/StrainBrainNavbar"
import { StrainProvider } from "./strain/StrainProvider"
import { StrainList } from "./strain/StrainList"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render filtered list of strains on home view */}
            <StrainProvider>
                <Route exact path="/">
                    <StrainList />
                </Route>
            </StrainProvider>
        </>
    )
}