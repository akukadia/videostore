import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

// const base_url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [showModal, setshowModal] = useState(false);
    const [seldata , setseldata] = useState([]);
    // const [selproduct , setselproduct] = useState([]);

    
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(fetchUrl);
             setMovies(request.data);
            // setMovies(request.data.results);
            //setMovies(request.data)
            return request;
        }
        fetchdata();
    }, [fetchUrl]);

    const getMovieDetails = (data) =>{
        setshowModal(true)
        setseldata(data);
    }

    const hideModal = () =>{
        setshowModal(false) 
    } 

    return (
        <div className = "row">
            <h2>{title}</h2>

            <div className = "row__posters">
                {/*row posters*/}

                {movies.map(movie =>(
                    // eslint-disable-next-line
                    <img
                    key={movie.id}
                    onClick={()=>getMovieDetails(movie)}
                    className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
                  // src= {`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                    src={movie.imageURL}
                    alt= {movie.name}
                    />
                ))}
            </div>

            {/* containers-->posters */}
            
                {showModal && <div className="modal-container" >
                <div className="modal--content">
                    <div class="close-icon" onClick={hideModal}>
                        </div>
                    <img  className="image-view" src= {seldata.imageURL} />
                 <div className="overview-sec">
                 <div className="title"> Overview</div>
                 <div className="content">
                     {seldata.overview}
                 </div>
                 <div className="price">
                 <button className="price-btn"> ${seldata.price}</button>
                </div>
                 
               </div>
                </div>
            </div>}
            
        </div>
    )
}

export default Row