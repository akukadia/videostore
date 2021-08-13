import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Nav from './Nav';
import Footer from './Footer';

function TvShows() {
  return (
    <div className="app">
    <div className = "content__wrap">
    <Nav />
    <div className="movies">
     <Row title = "TV Shows" fetchUrl = {requests.fetchTVshows}/>
    </div>
    </div>
    <Footer />
  </div>
  );
}

export default TvShows;
