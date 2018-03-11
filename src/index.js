import React, {render} from 'react';
import App from './App';
import FontFaceObserver from 'fontfaceobserver'
import css from './index.css'

const ASSETS_PATH=process.env.PUBLIC_URL || '';

if (typeof document !== 'undefined') {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
      if (document.readyState === 'complete') {
        document.getElementsByTagName('video')[0].play();
      }

      const element = document.createElement('style');
      element.type = 'text/css';
      element.appendChild(document.createTextNode(
        `@font-face{font-family:"Open Sans";font-style:normal;font-weight:bold;src:url("${ASSETS_PATH}/fonts/OSb.woff2") format("woff2"),url("${ASSETS_PATH}/fonts/OSb.woff") format("woff")}
           @font-face{font-family:"Open Sans";font-style: normal;font-weight:300;src:url("${ASSETS_PATH}/fonts/OSl.woff2") format("woff2"),url("${ASSETS_PATH}/fonts/OSl.woff") format("woff")`
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

  render(<App />, document.body);
}
export default App
