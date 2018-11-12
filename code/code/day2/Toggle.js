import React, { Component } from 'react';

export default class Toggle extends Component { 
    constructor(props){
        super(props)
        this.state ={isToggledOn:true}
        // we need to bind the event
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(
            (state)=>{return ({isToggledOn : !state.isToggledOn})}

            
        )
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggledOn ? 'ON' : 'OFF'}                
            </button>
        )
    }

}