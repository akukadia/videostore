import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Movies from './Movies'
import reportWebVitals from './reportWebVitals';
import TvShows from './TvShows';

ReactDOM.render(
  
  <React.StrictMode>
    <Router>
          <Switch>
            <Redirect exact path="/" to="/home"/>
             <Route path="/home" component={Home}/>
             <Route path="/movies" component={Movies}/>
             <Route path="/Tvshows" component={TvShows}/>
              
          </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
