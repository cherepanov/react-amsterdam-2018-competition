import React, {Component} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import FontFaceObserver from 'fontfaceobserver'

const ASSETS_PATH = process.env.PUBLIC_URL

class App extends Component {
  componentDidMount() {
    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        const element = document.createElement('style');
        element.type = 'text/css';
        element.appendChild(document.createTextNode(
          `@font-face{font-family:"Open Sans";font-style:normal;font-weight:bold;src:url("${ASSETS_PATH}/fonts/OSb.woff2") format("woff2"),url("/fonts/OSb.woff") format("woff")}
           @font-face{font-family:"Open Sans";font-style: normal;font-weight:300;src:url("${ASSETS_PATH}/fonts/OSl.woff2") format("woff2"),url("/fonts/OSl.woff") format("woff")`
          ));
        document.head.appendChild(element);
        Promise.all([ // eslint-disable-line
          new FontFaceObserver('Open Sans', {
            weight: 'bold'
          }).load(),
          new FontFaceObserver('Open Sans', {
            weight: 300
          }).load()
        ]).then(function () {
          document.documentElement.className += ' fonts-loaded';
        });
      }
    });
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Header/>
        <Body/>
        <Footer/>
      </div>
    )
  }
}

export default App
