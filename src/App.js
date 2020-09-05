import React, {Component} from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import Activity from './components/Activity'
import Header from './components/Header'
import Mod from './components/Mod'

// state: title / description / photo / time

class App extends Component {
  constructor() {
    super()
    this.state = {
      activities: [
        {
          title: "Problem solving",
          description: "Solve problems, algorithms on Codility, HackerRank and other similar sites",
          photo: "https://www.codility.com/wp-content/uploads/2020/03/CodilitySocial.jpg",
          time: 150
        },
        {
          title: "Build web app",
          description: "Build apps with React mainly",
          photo: "https://i.ytimg.com/vi/NO2DaxhoWHk/maxresdefault.jpg",
          time: 120
        },
        {
          title: "Learn JavaScript",
          description: "Learn JavaScript theory needed for interview directly from mdn",
          photo: "https://www.ciara.world/images/javascript.png",
          time: 60
        },
        {
          title: "Learn React",
          description: "Learn React directly from React docs, tutorial and guides",
          photo: "https://hackernoon.com/hn-images/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg",
          time: 60
        },
        {
          title: "Apply to jobs",
          description: "Search for jobs on linkedin, talk with friends, apply",
          photo: "https://lh3.googleusercontent.com/z0gMa0aRAkLxjS-lVaSOO1Ygb48rttOcR5iRpgJPTM6_enkfeCuN37JWm_9qcHJaJw",
          time: 30
        },        
      ],
      reward: 0
    }
  }

  subtractTime = (i) => {
    this.setState( prevstate => {
      let A = prevstate.activities.slice()
      A[i].time -= 30
      return {activities: A} 
    })
  }

  generateReward = () => {

  }

  render() {
    return (
      <>
      {/* <Mod /> */}
      <Header reward={this.state.reward} />
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
              click={this.subtractTime}
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