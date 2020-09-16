import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Activity(props) {
    return (
        <Card onClick={props.click}>
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
            <Card.Title>{props.title} - {props.time} mins</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
            {/* <Button variant="primary" className="blueColor">Start</Button> */}
        </Card.Body>
        </Card>
    )
}

export default Activity