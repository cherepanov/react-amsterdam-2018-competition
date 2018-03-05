import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-static-generator';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Open Sans', 'sans-serif'],
    urls: ['/fonts/fonts.css']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
// render(<App/>, document.getElementById('root'));
