import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  custom: {
    families: ['Open Sans', 'sans-serif'],
    urls: ['/fonts/fonts.css']
  },
  google: {
    families: ['Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
