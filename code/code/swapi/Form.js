import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Results from './Results'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
                        id: '',
                        category: '',
                        results: Array[100]
                    }
     this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }

handleChange(e){

      this.setState({category:e.target.value})
      this.setState({id:e.target.value})

   
}

handleSubmit(e){
    e.preventDefault()

    let url = `https://swapi.co/api/people/1/`
    fetch(url)
    .then( (response)=> {return (response.json())})
    .then( (json)=> {
        this.setState({results:json})
        console.log(json)
    })
}
    
    render(){
          let res
            if(this.state.results){
                res =    <Results results={this.state.results}/>
            }
            else {
                res =  <pre> watch this space...</pre>
            }
              
      
        return (
          
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='Category' onChange={this.handleChange} name='Category' value='People'/>
                    <input placeholder='Id'  onChange={this.handleChange} name='id'  value='1'/>
                    <input type='submit' value='Go'/>
                </form>
                {res}
            </aside>

        )
    }
}