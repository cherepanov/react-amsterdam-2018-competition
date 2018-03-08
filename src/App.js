import React, {Component} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import FontFaceObserver from 'fontfaceobserver'

const loadFont = () => {
  const element = document.createElement('style');
  element.type = 'text/css';
  element.appendChild(document.createTextNode(
    `@font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: bold;
      src: local('Open Sans'), url('/fonts/OSb.woff2') format('woff2'), url('/fonts/OSb.woff') format('woff');
    }
    @font-face {
       font-family: 'Open Sans';
       font-style: normal;
       font-weight: 300;
       src: local('Open Sans'), url('/fonts/OSl.woff2') format('woff2'), url('/fonts/OSl.woff') format('woff');
    }`));
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
};

class App extends Component {
  componentDidMount() {
    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        loadFont()
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
