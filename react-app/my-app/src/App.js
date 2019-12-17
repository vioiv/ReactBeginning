import React from 'react';
import './App.css';
import { render } from 'react-dom';

function Subject() {
  return (
    <header>
        <h1>WEB</h1>
        World wide web!
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Subject></Subject>
      <TOC></TOC>
      <Content>ß</Content>
    </div>
  );
}

function TOC(){
  return (
    <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
    </nav>
  );
}

function Content(){
  return(
    <article>
    <h2>HTML</h2>
    HTML is HyperText Markup Language.
    </article>
  );
}
export default App;
