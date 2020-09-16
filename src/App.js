import React, {Component} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import Activity from './components/Activity'
import Header from './components/Header'
import Pomodoro from './components/Pomodoro'
import Break from './components/Break'
import Navigation from './components/Navigation'

import {activities} from './data/activities'

class App extends Component {
  constructor() {
    super()
    this.state = {
      activities: activities,
      todaysReward: 0,
      maxReward: 80/7/2,
      pomodoroRunning: false,
      pomodoroIndex: undefined,
      pomodoroTime: 30,
      pomodorosDoneToday: 0,
      pauseRunning: false,
      loggedUser: ""
    }
  }

  finishPomodoro = (i) => {
    let activities = this.state.activities.slice()
    activities[i].time -= 30
    let pomodorosDoneToday = this.state.pomodorosDoneToday + 1
    let todaysReward = this.state.todaysReward + Math.ceil(Math.random()*this.state.maxReward)
    this.setState({
      todaysReward, 
      activities,
      pomodoroRunning: false, 
      pauseRunning: true,
      pomodoroIndex: undefined,
      pomodorosDoneToday})
  }

  stopPomodoro = () => this.setState({pomodoroRunning: false, pomodoroIndex: undefined})

  render() {
    return (
      <>
      <Navigation user={this.state.loggedUser} />
      {this.state.pauseRunning ? 
        <Break stop={() => this.setState({pauseRunning: false})} /> 
        : null}
      {this.state.pomodoroRunning ? 
        <Pomodoro 
          finish={() => this.finishPomodoro(this.state.pomodoroIndex)}
          stop={this.stopPomodoro}
          activity={this.state.activities[this.state.pomodoroIndex]}
          time={this.state.pomodoroTime}
        /> 
        : null}
      <Header  
        reward={this.state.todaysReward}
        pomodoros={this.state.pomodorosDoneToday} 
        />
      <Container>
        <Row>
        {this.state.activities.map( (element, index) => 
          element.time > 0 ? 
          <Col sm={6} md={4} className="pb-3 px-4" key={index}>
            <Activity 
              title={element.title} 
              description={element.description}
              photo={element.photo}
              time={element.time}
              click={() => this.setState({pomodoroRunning: true, pomodoroIndex: index})}
            />
          </Col> : null     
        )}
        </Row>
      </Container>      
      </>
    )
  }
}

export default App;