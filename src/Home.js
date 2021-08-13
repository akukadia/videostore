import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  return (
    <div className="app">
      <div className = "content__wrap">
      <Nav />
      <Banner />
      {/* <Row 
      title = "Featured Movies" 
      fetchUrl = {requests.fetchMovies}
      isLargeRow
      /> */}
      {/* <Row title = "Featured TV Shows" fetchUrl = {requests.fetchTVshows}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/> */}
      <div className="movies">
      <Row title = "Movies" fetchUrl = {requests.fetchMovies}/>
      <Row title = "TV Shows" fetchUrl = {requests.fetchTVshows}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;