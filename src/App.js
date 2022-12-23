import Greet from './components/Greet.js'
import Register from './components/Register.js'
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
  isregistered:false
    }
  }
  submitHandler=(e)=>{
e.preventDefault()
const name=e.target.name.value
const email=e.target.email.value
const password=e.target.password.value
this.setState({
  name,email,password,isregistered:true },()=>{
console.log(this.state)
 
})
  }
  render() {
    return (
      
      this.state.isregistered ===true?<Greet name={this.state.name} email={this.state.email}/>:<Register submit={this.submitHandler}/>
     
    )
  }
}

export default App