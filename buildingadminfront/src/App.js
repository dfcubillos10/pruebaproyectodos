import React, { Component } from 'react';
import Tenants from './Tenants.js';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super (props);
    this.state = {
      tenants:[
      ]
    };
  }

  componentDidMount(){
    fetch('/tenants',{method:'GET',
     headers:{accept:'application/json'}})
    .then((res)=>{
      if(res.ok)
        return res.json();
    })
    .then((tenants) =>{
      this.setState({
        tenants:tenants
      });
    })
  }

  render() {
    return (
      <div className="App">

        <p className="App-intro">

          Hola muuuundoooooo
        </p>
        <Tenants tenants={this.state.tenants}/>
      </div>
    );
  }
}

export default App;
