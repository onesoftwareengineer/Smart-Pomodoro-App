import React, {Component} from 'react'
import {Button, Modal, Image} from 'react-bootstrap'
import doneWav from '../sounds/sunny.wav'

class Pomodoro extends Component {
    constructor(props) {
      super(props)
      this.state = {
        timeLeft: this.props.time*60, //time left stored in seconds 
      }
      this.targetDate = Date.parse(new Date()) + this.props.time*60*1000 
    }

    componentDidMount() {
      const audio = new Audio(doneWav)
      audio.muted = true
      audio.play()

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
    }

    componentDidUpdate() {
      const pomodoroIsRunning = this.state.timeLeft > 1
      var audio = new Audio(doneWav)

      if(!pomodoroIsRunning) 
        audio.play()
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



