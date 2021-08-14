const API_KEY = "f184dae04fb109f41d8acfbc94588e3e";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   // fetchTVshows : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    //fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `https://video-store-backend1.herokuapp.com//api/comedymovie`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchMovies:`https://video-store-backend1.herokuapp.com//api/movie `,
    fetchTVshows : `https://video-store-backend1.herokuapp.com//api/tvshow`,
    fetchActionMovies:`https://video-store-backend1.herokuapp.com//api/actionmovie`,
}

export default requests;