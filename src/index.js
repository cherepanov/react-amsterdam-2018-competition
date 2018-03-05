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
  // google: {
  //   families: ['Lato:100,200,900&subset=latin-ext']
  // }
});

ReactDOM.render(<App />, document.getElementById('root'));
