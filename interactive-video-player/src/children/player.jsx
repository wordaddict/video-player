import React, { Component } from 'react';
import '../App.css';

class Players extends Component {
    constructor(){

    }

    getElements() {
        const player = document.querySelector('.player');
        const video = player.querySelector('.viewer');
        const progress = player.querySelector('.progress');
        const progressBar = player.querySelector('.progress__filled');
        const toggle = player.querySelector('.toggle');
        const skipButtons = player.querySelectorAll('[data-skip]');
        const ranges = player.querySelectorAll('.player__slider');
    }

    togglePlay() {
        const method = video.paused ? 'play' : 'pause';
        video[method]();
      }

    render() {
        return (
            this.togglePlay()
        );
    }
}