import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css'


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchMovies);
            setMovie(
                request.data[
                    Math.floor(Math.random() * request.data.length-1)]);
                    return request;

        }
        fetchData();
    }, []);

    console.log('movie--->',movie);

    return (
        <header className = "banner"
        style = {{
            backgroundSize : "cover",
            // backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundImage : `url("${movie.imageURL}")`,
            backgroundPosition: "center center",
        }}
        >
            <div className = "banner__contents">
            <h1 className= "banner__title">
                {movie.name}
            </h1>
            
            <div className = "banner__buttons">       
            <button className = "banner__button"> Play </button>
            <button className = "banner__button"> My List </button>        

            </div>

            <div className = "banner__fadeBottom" />

            </div>
        </header>
    )
}

export default Banner