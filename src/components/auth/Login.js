import React, { useRef } from "react"
import { Link } from "react-router-dom";
import "./Login.css"
import Button from "react-bootstrap/Button"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const passwordDialog = useRef()

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    // The user id is saved under the key app_user_id in local Storage. Change below if needed!
                    localStorage.setItem("app_user_id", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    passwordDialog.current.showModal()
                } else if (!exists) {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div style={{ color: "black" }}>User does not exist</div>
                <Button className="button--close" variant="outline-danger" onClick={e => existDialog.current.close()}>Close</Button>
            </dialog>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Strain Brain</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>

                        <br />
                        <div>
                            <Button type="submit" variant="outline-warning" >
                                Sign in
                        </Button>
                            <Link to="/register">
                                <Button variant="outline-warning" > Not a member? Register here!</Button>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

