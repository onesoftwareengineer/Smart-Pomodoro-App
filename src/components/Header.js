import React from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap'

function Header(props) {
    return (
        <Jumbotron className="pb-3 pt-4">
            <Container className="text-center">
                <h2>It is not enough to be industrious; so are the ants. What are you industrious about?
                    	<span className="font-weight-light"> totday's rewards {props.reward} ron</span>
                </h2>
                <p>
                <Button variant="primary" className="mt-3">Take a quick break</Button>
                </p>                
            </Container>
        </Jumbotron>
    )
} 

export default Header