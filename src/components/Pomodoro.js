import React, {Component} from 'react'
import {Button, Modal, Image} from 'react-bootstrap'
import doneWav from '../sounds/sunny.wav'

class Pomodoro extends Component {
    state = {
      isOpen: true,
      pomodoroTime: 5,
      timeLeft: this.props.time*60,
      audio: new Audio('./')
    }
    
    componentDidMount() {
      this.startDate = new Date()
      this.timerId = setInterval(
        () => {
          let timeLeft = this.state.pomodoroTime - 
            Math.round((new Date() - this.startDate)/1000)
          this.setState({timeLeft})
          if(this.state.timeLeft < 1) 
            clearInterval(this.timerId)
        },  
        1000
      )
    }

    componentWillUnmount() {
      	clearInterval(this.timerId)
    }

    render() {
      return (
        <>
          {this.state.timeLeft < 1 ? <audio src={doneWav} autoPlay/> : null}
          <Modal
            show={this.state.isOpen}
            onHide={this.props.stop}
            backdrop="static"
            keyboard={false}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {this.props.activity.title} - {this.state.timeLeft > 0 ? `${this.state.timeLeft} sec left` : `Done`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.activity.photo} fluid className="mt-2 mb-3"/>
              <p>
              {this.props.activity.description} If you get interrupted, whatever the reason is, click stop.
              </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-start">
              {this.state.timeLeft > 0 ? 
                <Button variant="secondary" onClick={this.props.stop} className="">Stop</Button> 
                : <Button variant="primary" onClick={this.props.finish}>Claim Reward</Button>
              }
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default Pomodoro