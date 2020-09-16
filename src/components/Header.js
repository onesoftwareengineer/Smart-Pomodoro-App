import React from 'react'
import {Jumbotron, Container, Button} from 'react-bootstrap'

function Header(props) {
    return (
        <Jumbotron className="py-5">
            <Container className="text-center">
                <h3>It is not enough to be industrious; so are the ants. What are you industrious about?
                    	<br /><span className="font-weight-light"> You worked {props.pomodoros/2} hrs and won {props.reward} ron today.</span>
                </h3>
            </Container>
        </Jumbotron>
    )
} 

export default Header