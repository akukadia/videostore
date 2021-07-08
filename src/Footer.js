import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className = "main__footer">
            <div className = "footer__content">
                <div className= "footer__rows">
                    {/* column1 */}
                    <div className = "col">
                        <h4>Fresh Video Store</h4>
                        <ul classname = "list__unstyled">
                            <li>+1 989-989-9898</li>
                            <li>Gujarat, India</li>
                            <li>Panvel Point, Surat</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className = "col">
                        <h4>Company</h4>
                        <ul classname = "list__unstyled">
                            <li>About</li>
                            <li>Blog</li>
                            <li>History</li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className = "col">
                        <h4>Terms &#38; Policies</h4>
                        <ul classname = "list__unstyled">
                            <li>Policies</li>
                            <li>Terms of Use</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Footer
