import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

function Navigation (props) {
    let loggedStatus = props.user ? 
            <>
                <Nav.Link href="#home">Welcome {props.user}</Nav.Link> 
                <span className="nav-link d-none d-lg-block">|</span>
                <Nav.Link href="#features">Sign out</Nav.Link>
            </>
        : 
            <>
                <Nav.Link href="#home">Sign in</Nav.Link>
                <span className="nav-link d-none d-lg-block">|</span>
                <Nav.Link href="#features">New account</Nav.Link>
            </>

    return(
        <Navbar variant="dark" expand="lg" className="blueColor">
        <Container>
            <Navbar.Brand href="#home">Smart Pomodoro App</Navbar.Brand>  <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav d-flex">
            <Nav className="mr-auto">
                <Nav.Link href="#home">Activities</Nav.Link>
                <Nav.Link href="#home">Rewards</Nav.Link>
                <Nav.Link href="#features">Info</Nav.Link>
            </Nav>
            <Nav className="font-weight-light">
                {loggedStatus}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>    
    )
}

export default Navigation



