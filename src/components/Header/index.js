import React, { Component } from 'react'
import ralogo from './ralogo.svg'
import spbflogo from './spbflogo.svg'
import overlay from './overlay_bg.svg'
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
          preload="none"
          muted
          loop
          ref={video => this.video = video}
          poster="https://react.amsterdam/img/dummy_bg.jpg"
          id="bgvid">
          <source src="https://react.amsterdam/video/video-.webm" type="video/webm" />
          <source src="https://react.amsterdam/video/video.mp4" type="video/mp4" />
        </video>

        <div className="Header-overlay" style={{ background: `url(${overlay}) 50% rgba(0, 0, 0, .4)` }} />

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
