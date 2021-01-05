import React, { Component } from 'react';
import { Route, Switch } from 'react-router';


import './custom.css'
import { FetchData } from './components/FetchData';

export default class App extends Component {
  static displayName = App.name;
    
  render () {
    return (
         <Switch>
            <Route exact path='/' component={FetchData} />
        </Switch>
       
      
    );
    }

    
}
