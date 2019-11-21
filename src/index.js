import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const booklist = [
  {
    id: 1,
    name: "Taru sormusten herrasta",
    author: "J.R.R Tolkien"
  },
  {
    id: 2,
    name: "Sieppari ruispellossa",
    author: "J.D Salinger"
  }
]

ReactDOM.render(<App booklist={booklist} />, document.getElementById('root'));

