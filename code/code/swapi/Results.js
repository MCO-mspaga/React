import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Results extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: props.results
        }
    }

    render(){
        return (
           <h1> Name: {this.state.results.name} </h1>

        )
    }
}