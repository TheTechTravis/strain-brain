/*
Author: Travis Stevenson
Purpose: This is the landing page that will be reached after user authentication.
*/

import React from "react"
import "../components/StrainBrain.css"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { StrainProvider } from "./strain/StrainProvider"
import { StrainBrainNavbar } from "./navbar/StrainBrainNavbar"
import { ApplicationViews } from "./ApplicationViews"

export const StrainBrain = () => (
    <>
        <Route render={() => {
            // The user id is saved under the key app_user_id in local Storage. Change below if needed!
            if (localStorage.getItem("app_user_id")) {
                return (
                    <>
                        {/* Components that are rendered when the user is authenticated go inside this React fragment */}
                        <Route render={props => <StrainBrainNavbar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)