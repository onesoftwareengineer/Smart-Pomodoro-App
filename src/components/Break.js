import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import doneWav from '../sounds/school.wav'

class Break extends Component {
    state = {
      isOpen: true,
      breakTime: 5*60,
      timeLeft: 5*60,
      audio: new Audio('./')
    }
  
    componentDidMount() {
      this.startDate = new Date()
      this.timerId = setInterval(
        () => {
          let timeLeft = this.state.breakTime - Math.round((new Date() - this.startDate)/1000)
          this.setState({timeLeft})
          if(this.state.timeLeft < 1) clearInterval(this.timerId)
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
                Quick break - {this.state.timeLeft > 0 ? `${this.state.timeLeft} sec left` : `Done`}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              Take a quick {this.state.breakTime/60} min break. Get back to work afterwards, be productive, time goes on. 
              </p>
            </Modal.Body>
            <Modal.Footer className="justify-content-start">
              <Button variant="secondary" onClick={this.props.stop} className="">Stop</Button> 
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default Break