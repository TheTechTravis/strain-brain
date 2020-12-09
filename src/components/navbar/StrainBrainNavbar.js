import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const StrainBrainNavbar = (props) => {
    return (
        <>
            <Navbar bg="light">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">LOGO HERE</Nav.Link>
                </Nav>
                <Navbar.Brand className="mx-auto" href="/">Strain Brain</Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="/conditions">Conditions</Nav.Link>
                    <Nav.Link href="/puff">Puff</Nav.Link>
                    <Nav.Link href="/pass">Pass</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}