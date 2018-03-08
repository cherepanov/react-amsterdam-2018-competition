import React, {Component} from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import FontFaceObserver from 'fontfaceobserver'

const loadFont = () => {
  const element = document.createElement('style');
  element.type = 'text/css';
  element.appendChild(document.createTextNode(
    '@font-face {\n' +
    '  font-family: \'Open Sans\';\n' +
    '  font-style: normal;\n' +
    '  font-weight: bold;\n' +
    '  src: local(\'Open Sans\'), url(\'/fonts/Open_Sans/subset-OpenSans-Bold.woff2\') format(\'woff2\'), url(\'/fonts/Open_Sans/subset-OpenSans-Bold.woff\') format(\'woff\');\n' +
    '}\n' +
    '\n' +
    '@font-face {\n' +
    '  font-family: \'Open Sans\';\n' +
    '  font-style: normal;\n' +
    '  font-weight: 300;\n' +
    '  src: local(\'Open Sans\'), url(\'/fonts/Open_Sans/subset-OpenSans-Light.woff2\') format(\'woff2\'), url(\'/fonts/Open_Sans/subset-OpenSans-Light.woff\') format(\'woff\');\n' +
    '}'));
  document.getElementsByTagName('head')[0].appendChild(element);
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
