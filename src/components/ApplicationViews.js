import React from "react"
import { Route } from "react-router-dom"
import { StrainProvider } from "./strain/StrainProvider"
import { StrainList } from "./strain/StrainList"
import { ConditionForm } from "./conditions/ConditionForm"
import { StrainDetail } from "./strain/StrainDetail"
// import { StrainForm } from "./strain/StrainForm"
import { ConditionProvider } from "./conditions/ConditionProvider"
import { UserConditionProvider } from "./userConditions/UserConditionProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            {/* Recommended Strains Route */}
            <ConditionProvider>
                <UserConditionProvider>
                    <StrainProvider>
                        <Route exact path="/">
                            <StrainList {...props} />
                        </Route>
                    </StrainProvider>
                </UserConditionProvider>
            </ConditionProvider>

            {/* User Conditions Route */}
            <ConditionProvider>
                <UserConditionProvider>
                    <Route exact path="/conditions">
                        <ConditionForm />
                    </Route>
                </UserConditionProvider>
            </ConditionProvider>

            {/* Strain Detail Route */}
            <StrainProvider>
                <Route path="/details/:strainId(\d+)" render={
                    props => <StrainDetail {...props} />
                } />
            </StrainProvider>

            {/* Strain Detail Route */}
            {/* <StrainProvider>
                <Route path="/details/form/:strainId(\d+)" render={
                    props => <StrainForm {...props} />
                } />
            </StrainProvider> */}
        </>
    )
}