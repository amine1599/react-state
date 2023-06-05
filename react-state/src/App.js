import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

class App extends Component {
  state = {
    person: {
      fullName: "Lionel Messi",
      bio: "The greatest football player ever.",
      imgSrc: "data:image/jpeg;base64,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",
      profession: "Football Player"
    },
    show: false,
    mountTime: null
  };

 

  componentDidMount() {
    this.setState({ mountTime: new Date() });

    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  getTimeSinceMount() {
    const currentTime = new Date();
    const mountTime = this.state.mountTime;
    const interval = currentTime - mountTime;
    const seconds = Math.floor(interval / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
  }

  render() {
    const { person, show } = this.state;
    const timeSinceMount = this.getTimeSinceMount();

    return (
      <div style={{textAlign:'center'}}>
        <Card>
          <Card.Title >Personal Profile</Card.Title>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>

        {show && (
          <div>
            <Card className='mb-3' >
              <Card.Title>{person.fullName}</Card.Title>
              <Card.Body>
                <Card.Img src={person.imgSrc} alt="Profile" style={{width:'100px', height:'100px'}} />
                <Card.Text>{person.bio}</Card.Text>
                <Card.Text>Profession: {person.profession}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}

        <Card.Text>Time since mount: {timeSinceMount}</Card.Text> 
        </Card>
      </div>
    );
  }
}

export default App;