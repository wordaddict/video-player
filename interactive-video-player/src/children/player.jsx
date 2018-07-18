import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Players extends Component {
    constructor(){
        super(this.props)
        this.state = event
    }
  getElements() {
    this.togglePlay();
    const player = ReactDOM.render(document.querySelector('.player'));
    const video = ReactDOM.render(player.querySelector('.viewer'));
    const progress = ReactDOM.render(player.querySelector('.progress'));
    const progressBar = ReactDOM.render(player.querySelector('.progress__filled'));
    const toggle = ReactDOM.render(player.querySelector('.toggle'));
    const skipButtons = ReactDOM.render(player.querySelectorAll('[data-skip]'));
    const ranges = ReactDOM.render(player.querySelectorAll('.player__slider'));
  }

  handleClick = (event) => {
      this.props.children()
  }

  togglePlay() {
    this.getElements();
    const method = video.paused ? 'play' : 'pause';
    video[method]();
  }

  render() {
    return (
      this.togglePlay()
    );
  }
}

ReactDOM.render()

module.export = Players;
