import React, {Component} from 'react'
import {Button, Modal, Image} from 'react-bootstrap'
import doneWav from '../sounds/sunny.wav'

class Pomodoro extends Component {
    state = {
      //time left stored in seconds 
      timeLeft: this.props.time*60
    }
    targetDate = Date.parse(new Date()) + this.props.time*60*1000 
    audio = new Audio(doneWav)

    componentDidMount() {
      this.audio.muted = true
      this.audio.play()

      this.intervalId = setInterval( () => {
        let timeLeft = ( this.targetDate - Date.parse(new Date()) )/1000
        this.setState({timeLeft})
        document.title = `${Math.round((timeLeft/(this.props.time*60))*100)}%`
        if(timeLeft < 1) {
          clearInterval(this.intervalId) 
        }
      }, 500) 
    }

    componentWillUnmount() {
      clearInterval(this.intervalId)
      this.audio.pause()
    }

    componentDidUpdate() {
      const pomodoroIsRunning = this.state.timeLeft > 1
      if(!pomodoroIsRunning) 
        this.audio.muted = false
        this.audio.play()
    }

    render() {
      const pomodoroIsRunning = this.state.timeLeft > 1
      const title = pomodoroIsRunning ? 
        `${this.props.activity.title} - ${this.state.timeLeft} sec left` : 
        `Hurray, job done !` 
      const button = pomodoroIsRunning ? 
        <Button variant="secondary" onClick={this.props.stop} className="">Stop</Button> : 
        <Button variant="primary" onClick={this.props.finish}>Claim Reward</Button>

      return (
        <>
          <Modal
            show={true}
            onHide={this.props.stop}
            backdrop="static"
            keyboard={false}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>
                { title }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image src={this.props.activity.photo} fluid className="mt-2 mb-3"/>
              <p>
                <strong>{`Focus on the following activity for ${this.props.time} minutes. If you defocus click stop: `}</strong>
                { this.props.activity.description }
              </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-start">
              { button }
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default Pomodoro



