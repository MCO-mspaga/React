import React, { Component } from 'react';
import PropTypes from 'prop-types'

//utiltiy function 
function FormattedDate(props) {
    return <h3>The {props.name} current time is {props.date.toLocaleTimeString()}</h3>
}

FormattedDate.proptypes = { 
    name:PropTypes.string

}



export default class Clock extends Component { 
    constructor(props){//always pass in props
        super(props) // always pass props to the parent

        this.state = {
            date: new Date()
        }
    }

    //class method
    tick(){
        this.setState({
            date: new Date()
        })       
    }
    
    //life-cycle event handlers
    componentDidMount(){
        this.timerID = setInterval(
            () => {return (this.tick(), 1000)}
        )
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }    
    
    render(){
     return(
     <article> 
            <h1>Managing State </h1>
            {/*<h2>The current time is {this.state.date.toLocaleTimeString()}</h2>*/}
            <FormattedDate date = {this.state.date}/>
             <FormattedDate name = 'uk' date = {this.state.date}/>
            
        </article>
     )   
    }
}