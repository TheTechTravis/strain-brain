import React from "react"
import { Route } from "react-router-dom"
import { StrainProvider } from "./strain/StrainProvider"
import { StrainList } from "./strain/StrainList"
import { ConditionForm } from "./conditions/ConditionForm"
import { ConditionProvider, UserConditionContext } from "./conditions/ConditionProvider"
import { UserConditionProvider } from "./userConditions/UserConditionProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Render filtered list of strains on HOME view */}
            <UserConditionProvider>
                <StrainProvider>
                    <Route exact path="/">
                        <StrainList />
                    </Route>
                </StrainProvider>
            </UserConditionProvider>

            {/* User conditions route */}
            <ConditionProvider>
                <UserConditionProvider>
                    <Route exact path="/conditions">
                        <ConditionForm />
                    </Route>
                </UserConditionProvider>
            </ConditionProvider>
        </>
    )
}