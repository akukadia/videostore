import axios from "axios";

/*base url to make requests to movie db */
const instance = axios.create({
  // baseURL:"https://api.themoviedb.org/3", 
    baseURL:"http://localhost:8080"
});

export default instance;