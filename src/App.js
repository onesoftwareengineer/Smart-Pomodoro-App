import React, {Component} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import Activity from './components/Activity'
import Header from './components/Header'
import Pomodoro from './components/Pomodoro'
import Break from './components/Break'

// state: title / description / photo / time

class App extends Component {
  constructor() {
    super()
    this.state = {
      activities: [
        {
          title: "Problem solving",
          description: "Solve problems, algorithms on Codility, HackerRank and other similar sites.",
          photo: "https://www.codility.com/wp-content/uploads/2020/03/CodilitySocial.jpg",
          time: 150
        },
        {
          title: "Build web app",
          description: "Build apps with React mainly.",
          photo: "https://i.ytimg.com/vi/NO2DaxhoWHk/maxresdefault.jpg",
          time: 120
        },
        {
          title: "Learn JavaScript",
          description: "Review JavaScript theory needed directly from mdn.",
          photo: "https://www.ciara.world/images/javascript.png",
          time: 60
        },
        {
          title: "Learn React",
          description: "Review React theory directly from React docs, tutorial and guides.",
          photo: "https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg",
          time: 60
        },
        {
          title: "Apply to jobs",
          description: "Search for jobs on linkedin, talk with friends, apply.",
          photo: "https://lh3.googleusercontent.com/z0gMa0aRAkLxjS-lVaSOO1Ygb48rttOcR5iRpgJPTM6_enkfeCuN37JWm_9qcHJaJw",
          time: 30
        },        
      ],
      todaysReward: 0,
      maxReward: 80/7,
      pomodoroRunning: false,
      pomodoroIndex: undefined,
      pomodoroTime: 30,
      pomodorosDoneToday: 0,
      pauseRunning: false 
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
        break={() => this.setState({pauseRunning: true})}
        />
      <Container>
        <Row>
        {this.state.activities.map( (element, index) => 
          element.time > 0 ? 
          <Col sm={6} md={4} className="pb-4 px-4" key={index}>
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