import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Explore from './components/Explore'



export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <div className="nav-container">
            <Navbar />
          </div>
        
          <Switch>
           
              <Route exact path='/' component={Home}/>
            
          </Switch>
    
        </BrowserRouter> 
      </div>
    )
  }
}


