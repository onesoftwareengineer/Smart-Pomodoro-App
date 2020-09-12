import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

function Navigation () {
    return(
        <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Smart Pomodoro App</Navbar.Brand>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Activities</Nav.Link>
                <Nav.Link href="#features">Rewards</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>    
    )
}

export default Navigation