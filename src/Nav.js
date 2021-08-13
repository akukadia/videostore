import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom'
import axios from './axios';
import './Nav.css';
// import requests from './requests';
 

function Nav() {

    const [show, handleShow] = useState(false);
    const [showAdd, setshowAdd] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [fname,setfname] = useState('');
    const [lname,setlname] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [address,setaddress] = useState('');
    const [ferror,setferror] = useState('');
    const [lerror,setlerror] = useState('');
    const [eerror,seteerror] = useState('');
    const [perror,setperror] = useState('');
    const [aerror,setaerror] = useState('');
    const [res ,setres] =useState([]);
    const [movieType ,setmovieType] =useState('');
    const [name ,setname] =useState('');
    const [imageURL ,setimageURL] =useState('');
    const [overview ,setoverview] =useState('');
    const [price ,setprice] =useState('');
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    var cPattern =new RegExp(/^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g)
  
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

    }, [])
    

    const openRegistration = () =>{
        setshowModal(true);
    }

    const cancel = () => {
        setshowModal(false);
    }

    const cancelAdd = () => {
        setshowAdd(false);
    }

    const addMovie = () => {
        setshowAdd(true);
    }

    const handlefnChange = (event) =>{
        setfname(event.target.value);
        if (!cPattern.test(event.target.value)) {
            setferror('Invaild format')
          }
    }

    const handlelnChange = (event) =>{
        setlname(event.target.value);
        if (!cPattern.test(event.target.value)) {
            setlerror('Invaild format')
          }
    }

    const handleemmailChange = (event) =>{
        setemail(event.target.value);
        const email = event.target.value;
        if (!pattern.test(email)) {
            seteerror('Invaild format')
          }
    }

    const handlepasswordChange = (event) =>{
        setpassword(event.target.value);
    }
    const handleaddressChange =(event)=>{
        setaddress(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data ={
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "mobile": password,
            "address": address
        }
      
        if(fname ===''){
            setferror('This field is mandatory')
        }else{
            setferror('')
        }
        if(lname ===''){
            setlerror('This field is mandatory')
        }else{
            setlerror('')
        }
        if(email ===''){
            seteerror('This field is mandatory')
        }else {
            seteerror('')
        }
        if(password ===''){
            setperror('This field is mandatory')
        }else {
            setperror('')   
        }
        if(address ===''){
            setaerror('This field is mandatory')
        }else{
            setaerror('')
        }
        if(fname !=='' &&lname !=='' && email !=='' && password !=='' &&  address !==''){
            setshowModal(false);
        }else{
            setshowModal(true);
        }
        axios.post('/api/users', data)
        .then(res => setres(res.data));
    }

    function getMovieType(e){
        setmovieType(e.target.value);
    }
    function getname(e){
        setname(e.target.value);
    }
    function getimageurl(e){
        setimageURL(e.target.value)
    }
    function getoverview(e){
        setoverview(e.target.value)
    }
    function getprice(e){
        setprice(e.target.value)
    }


    const add =() => {
        const data ={
            "name" : name,
            "imageURL" : imageURL,
            "overview" : overview,
            "movieType" : movieType,
            "price" : price,
        }

        if(movieType ==='Tv Shows'){
            axios.post('/api/tvshow', data)
            .then(res => {if(res){
               
            }});
           
        }else{
            axios.post('/api/movie ', data)
            .then(res => {if(res){}});
        }
        window.location.reload();
      //  window.reload()
        setshowAdd(false);
    }

    return (
        <>
        {showAdd &&<div className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    Add Tvshows/Movies
                </div>
                <div className="model-body">
                <div className="input-field">
                        <div className="input-label">Movie Type</div>
                        <div>
                        <select className="input-select" value={movieType}  onChange={getMovieType} type="select">
                            <option value="Movie">Movies</option>
                            <option value="TVShow">Tv Shows</option>
                            <option value="Action">Action Movies</option>
                            <option value="Comedy">Comedy Movies</option>
                        </select>
                        </div>
                    </div>
                    <div className="input-field">
                        <div className="input-label">Name</div>
                        <div>
                        <input  className="input-text"  type="text"   value={name}  onChange={getname}/>
                        </div>
                    </div>
                    
                    <div className="input-field">
                        <div className="input-label">Image Url</div>
                        <div>
                        <input  className="input-text"  type="text"  value={imageURL}  onChange={getimageurl}/>
                        </div>
                    </div>
                    <div className="input-field">
                        <div className="input-label">Overview</div>
                        <div>
                        <textarea
                        className="input--text"
                        value={overview}
                        onChange={getoverview}
                        />
                        </div>
                    </div>
                    <div className="input-field">
                        <div className="input-label">Price</div>
                        <div>
                        <input  className="input-text" value={price} onChange={getprice} type="number"  required/>
                        </div>
                    </div>
                    <div className="submit-sec">
                        <div className="cancel--btn">
                            <button className="cancel-btn" onClick={cancelAdd} type="button">Cancel</button>

                        </div>
                        <div className="cancel--apply">
                        <button className="apply-btn" type="submit" onClick={add}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> }
        
        {showModal && <div className="modal-container">
            <div className="modal-content">
                <div className="modal-header">
                    Registration
                </div>
                <div className="model-body">
                    <form noValidate>
                    <div className="input-field">
                        <div className="input-label">First name</div>
                        <div>
                        <input  className="input-text" onChange={handlefnChange} name={fname} type="text"  required/>
                        </div>
                        <div className="error-field">
                            {ferror}
                        </div>
                        
                    </div>
                    <div className="input-field">
                        <div className="input-label">Last name</div>
                        <div>
                        <input className="input-text" name={lname} onChange={handlelnChange} type="text"  required />
                        </div>
                        <div className="error-field">
                            {lerror}
                        </div>
                        
                    </div>
                    <div className="input-field">
                        <div className="input-label">Email address</div>
                        <div>
                        <input className="input-text" name={email} onChange={handleemmailChange} type="email" required />
                        </div>
                        <div className="error-field">
                            {eerror}
                        </div>
                        
                    </div>
                    <div className="input-field">
                        <div className="input-label">Password</div>
                        <div>
                        <input className="input-text" name={password} onChange={handlepasswordChange} type="password" required  />
                        </div>
                        <div className="error-field">
                            {perror}
                        </div>
                        
                    </div>
                    <div className="input-field">
                        <div className="input-label">Address</div>
                        <div>
                        <input className="input-text" name={address} onChange={handleaddressChange} type="text" required />
                        </div>
                        <div className="error-field">
                            {aerror}
                        </div>
                        
                    </div>
                    <div className="submit-sec">
                        <div className="cancel--btn">
                            <button className="cancel-btn" onClick={cancel} type="button">Cancel</button>

                        </div>
                        <div className="cancel--apply">
                        <button className="apply-btn" type="submit" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>}
        <div className= {`nav ${show && "nav__black"}`}>
        <NavLink to={'/home'}> <img className= "nav__logo" 
         src = "https://w7.pngwing.com/pngs/70/880/png-transparent-app-store-macbook-pro-video-ringtone-others-text-orange-logo.png"
         alt = "Video Logo"
         />
         </NavLink>
        
         <ul className="nav-list">
         <li >
         <NavLink to={"/Movies"} className="nav-item" >Movies</NavLink>
         </li>
         <li>
         <NavLink to={"/Tvshows"} className="nav-item" > Tv Shows </NavLink>
         </li>
         <li onClick={openRegistration}>
            Registration
         </li>
         <li onClick={addMovie}>
             Add Tv shows/Movies
         </li>
         <li>
       {res.firstName}  {res.lastName}
         </li>

         </ul>
         <img className= "nav__userlogo" 
         src = "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
         alt = "Video Logo"
         />
            
        </div>
        </>
    )
}

export default Nav