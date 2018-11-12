import React, { Component } from 'react';

export default class WeatherForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      citycountry:[ 'leeds,gb','munich,dr', 'london,gb','california,us'],
                  city: 'leeds',
                  country: 'gb',
                  result: Array[100]
    }
     this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

    
  handleSubmit(e){
    e.preventDefault()
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.active}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=glasgow,gb&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
    fetch(url)
        .then( (response)=> {return (response.json())})
        .then( (json)=> {
          this.setState({result:json})
          console.log(json)
        })
  }



handleChange(e){
        this.setState({city:e.target.value})
    }

    handleChange2(e){
        this.setState({country:e.target.value})
    }


     handleSelect(e){
        this.setState({active:e.target.value})
    }


  render() {
     let res
            if(this.state.result){
                res = <pre> {this.state.result.weather[0].description}</pre>
            }
            else {
                res =  <pre> watch this space...</pre>
            }
    return (
      <aside> 
        <form onSubmit={this.handleSubmit}>
           <select onChange={this.handleSelect} value= {this.state.active}>
                        <option>{this.state.}</option>
                    </select>
          <input placeholder='City' onChange={this.handleChange} value={this.state.city}/>  <a/>
          <input placeholder='Country' onChange={this.handleChange2} value={this.state.country}/>
             <input type='submit' value='Go'/>
          </form>
          <hr/>
          {res}
      </aside>
    )
  }
}

