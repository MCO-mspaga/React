import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// declare a component using JSX
const username = 'Ada'
const myElement = <h1 TITLE ='my-id'>Hello {username}</h1>

// compare a function component and a class component
function tick() {
    const el = (
                <div>
                    <h2>Today is {new Date().toLocaleTimeString()}</h2>
                </div>
  )
  ReactDOM.render(el, document.getElementById('root'))
}

//setInterval(tick, 1000)


//  render our component on the page

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
