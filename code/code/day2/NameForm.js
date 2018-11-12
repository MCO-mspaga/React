import React, { Component } from 'react';

export default class NameForm extends Component { 
        constructor(props){
            super(props)
            this.state = {  
                            name: '',
                            t:'todos',
                            a:'albums',
                            p:'photos',
                            active: 'albums',
                            result: Array[100]
                        }
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
            this.handleSelect = this.handleSelect.bind(this)
  }


    handleSubmit(e){
        // we must prevent the form from actually submitting
         e.preventDefault()
        // alert(this.state.name)
        //make a fetch request to an end-point
        let url = `https://jsonplaceholder.typicode.com/${this.state.active}`
        fetch(url)
            .then( (response)=> {return (response.json())})
            .then( (json)=> {
                // take the returned data and use it in the component state.
                this.setState({result:json})
                console.log(json)
            })
    }

    handleChange(e){
        this.setState({name:e.target.value})
    }
    
    handleSelect(e){
        this.setState({active:e.target.value})
    }

    render(){
         let res
            if(this.state.result){
                res = <pre> {this.state.result[0].title}</pre>
            }
            else {
                res =  <pre> watch this space...</pre>
            }
        return (
            <aside>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleSelect} value= {this.state.active}>
                        <option>{this.state.t}</option>
                        <option>{this.state.a}</option>
                        <option>{this.state.p}</option>
                    </select>
                    <hr/>
                    <input placeholder='Name' onChange={this.handleChange} value={this.state.value}/>
                    <input type='submit' value='go'/>
                </form>  
                {res}  
            </aside>
        )
    }
}