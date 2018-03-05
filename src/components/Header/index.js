import React, { Component } from 'react'
import ralogo from './ralogo.svg'
import spbflogo from './spbflogo.svg'
// import overlay from './overlay_bg.svg'
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
          poster={require('../../images/dummy_bg-min.jpg')}
          id="bgvid">
          <source src="https://react.amsterdam/video/video.webm" type="video/webm" />
          <source src="https://react.amsterdam/video/video.mp4" type="video/mp4" />
        </video>
        {/*<div className="Header-overlay" style={{ background: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7b3BhY2l0eTouNH08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwaDJ2MkgweiIgY2xhc3M9ImNscy0xIi8+PHBhdGggaWQ9IlJlY3RhbmdsZV8xX2NvcHkiIGQ9Ik0yIDJoMnYySDJ6IiBjbGFzcz0iY2xzLTEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEgY29weSIvPjwvc3ZnPg==) 50% rgba(0, 0, 0, .4)' }} />*/}
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
