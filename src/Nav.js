import React, {useState, useEffect} from 'react';
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);
useEffect(() => {

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    
}, [])

    return (
        <div className= {`nav ${show && "nav__black"}`}>
        <img className= "nav__logo" 
         src = "https://w7.pngwing.com/pngs/70/880/png-transparent-app-store-macbook-pro-video-ringtone-others-text-orange-logo.png"
         alt = "Video Logo"
         />

<img className= "nav__userlogo" 
         src = "https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
         alt = "Video Logo"
         />
            
        </div>
    )
}

export default Nav
