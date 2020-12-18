import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import logo from "../../logo.png"

export const StrainBrainNavbar = (props) => {
    return (
        <>
            <Navbar bg="" height={5} style={{ height: "5rem", backgroundColor: "#9DC88D" }}>
                <Nav className="mr-auto">
                    <Nav.Link href="/"> <img src={logo} alt={"Strain Brain Logo"} width={100} height={100} /> </Nav.Link>
                </Nav>
                <Navbar.Brand className="mx-auto" href="/"></Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="/conditions">Conditions</Nav.Link>
                    <Nav.Link href="/puff">Puff</Nav.Link>
                    <Nav.Link href="/pass">Pass</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}