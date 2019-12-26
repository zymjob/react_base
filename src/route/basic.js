import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Basic extends Component {
    render(){
       return(
           <Router>
               <Route
                    path="/"
                    component={Home}
                />
           </Router>
       )
    }
}

class Home extends Component{
    render(){
        return(
            <div>Home</div>
        )
    }
}