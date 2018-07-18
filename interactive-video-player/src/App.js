import React, { Component } from 'react';
import './App.css';

// eslint-disable-next-line prefer-stateless-function
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: 1
    }
  }
  render() {
    return (
      <div className="player">
        <video className="player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164" />

        <div className="player__controls">
          <div className="progress">
            <div className="progress__filled" />
          </div>
          <button className="player__button toggle" title="Toggle Play">►</button>
          <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={this.setState.value = 1} />
          <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" value={this.setState.value = 1} />
          <button data-skip="-10" className="player__button">« 10s</button>
          <button data-skip="25" className="player__button">25s »</button>
        </div>
      </div>
    );
  }
}

export default App;
