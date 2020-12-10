import React from "react"
import { Route } from "react-router-dom"
import { StrainBrainNavbar } from "./navbar/StrainBrainNavbar"
import { StrainProvider } from "./strain/StrainProvider"
import { StrainList } from "./strain/StrainList"
import { ConditionForm } from "./conditions/ConditionForm"
import { ConditionProvider } from "./conditions/ConditionProvider"
export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render filtered list of strains on HOME view */}
            <StrainProvider>
                <Route exact path="/">
                    <StrainList />
                </Route>
            </StrainProvider>

            {/* User conditions route */}
            <ConditionProvider>
                <Route exact path="/conditions">
                    <ConditionForm />
                </Route>
            </ConditionProvider>
        </>
    )
}