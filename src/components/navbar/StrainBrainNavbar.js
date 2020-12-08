import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const StrainBrainNavbar = (props) => {
    return (
        <>
            <Navbar bg="light">
                <Navbar.Brand href="#home">Strain Brain</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Conditions</Nav.Link>
                    <Nav.Link href="#link">Puff</Nav.Link>
                    <Nav.Link href="#link">Pass</Nav.Link>
                </Nav>
            </Navbar>
            <h2>Strain Brain!</h2>
            <small>Your personal guide to medical marijuana.</small>
        </>
    )
}