import React, { Component } from 'react'
import ralogo from './ralogo.svg'
import spbflogo from './spbflogo.svg'
import './index.css'

class Header extends Component {
  componentDidMount() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.video.play();
      }
    }
  }

  render() {
    return (
      <header className="Header-header">
        <video
          className="Header-video"
          preload="metadata"
          muted
          loop
          ref={video => this.video = video}
          id="bgvid">
          <source src="https://react.amsterdam/video/video.webm#t=0.5" type="video/webm" />
          <source src="https://react.amsterdam/video/video.mp4#t=0.5" type="video/mp4" />
        </video>
        <div className="Header-overlay" style={{
          backgroundImage: `linear-gradient(45deg, black 26%, transparent 25%, transparent 75%, black 75%, black),
                            linear-gradient(45deg, black 26%, transparent 25%, transparent 75%, black 75%, black)`,
          backgroundSize: '4px 4px',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundPosition: '0 0, 2px 2px'
        }} />

        <div className="Header-wrapper">
          <div className="Header-logos">
            <img src={ralogo} className="Header-logo" alt="React Amsterdam Logo" />
            <img src={spbflogo} className="Header-logo" alt="SPB Frontend Logo" />
          </div>
          <h1 className="Header-title">SPB Frontend & React Amsterdam Competition</h1>
        </div>
      </header>
    )
  }
}

export default Header
