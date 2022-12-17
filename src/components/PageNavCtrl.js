import React from 'react'
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap'
import './css/PageNavCtrl.css'

export default function PageNavCtrl({ content }) {
    return (
        <div>
            {/* <Container>
                
            </Container> */}

            <Navbar bg="none" variant="dark" expand="lg">
                <Container>
                    {/* <Navbar.Brand href="/"><div style={{ fontWeight: "bold", padding: "8px 12px" }}>Pranav Ramesh</div></Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ padding: "8px 12px" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/"><div className="NavbarLink">Home</div></Nav.Link>
                            <Nav.Link href="/apps"><div className="NavbarLink">Apps</div></Nav.Link>
                            <Nav.Link href="/books"><div className="NavbarLink">Books</div></Nav.Link>
                            <Nav.Link href="/projects"><div className="NavbarLink">Projects</div></Nav.Link>
                            <Nav.Link href="/photography"><div className="NavbarLink">Photography</div></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container style={{ padding: "0px 24px 24px 24px" }}>
                {content}
            </Container>
        </div>
    )
}