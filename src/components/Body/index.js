import React, {Component} from 'react'
import Lazy from 'relaze'

class Body extends Component {
  render() {
    return (
      <div className="BB">
        <div className="BC">
          <h2 className="BT">
            <small>React Amsterdam is a celebration of good things coming together:</small>
            <div>REACT THAT ROCKS AND SPRING IN AMSTERDAM THAT BLOSSOMS</div>
          </h2>
          <p>
            A full-day, two-track conference on all things React, gathering Front-end and Full-stack developers across
            the globe in the tech heart of Europe. We're coming back with a new gig on <strong>April 13, 2018</strong>.
            Mark your calendars for the biggest React community event.
            <br/>
            Same as last year, day before the main event, we'll host a{' '}
            <a href="https://react.amsterdam/workshops">training day</a>, with three workshops on advanced React and
            State Management as well as a crash course on React Native.
          </p>
          <div className="BIS">
            <Lazy src={require('../../images/01_420.png')}>
              <img alt="01"/>
            </Lazy>
            <Lazy src={require('../../images/02_420.jpg')}>
              <img alt="02"/>
            </Lazy>
            <Lazy src={require('../../images/03_420.jpg')}>
              <img alt="03"/>
            </Lazy>
          </div>
        </div>
      </div>
    )
  }
}

export default Body
