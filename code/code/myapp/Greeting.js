import React, { Component } from 'react';
// a class component
export default class Greeting extends Component {
    render() { // all React components MUST implement a render method
        return <h1> Greetings {this.props.name} </h1>
    }
}
