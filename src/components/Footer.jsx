import React from 'react';
import logo from '../images/logo.svg';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Restaurant logo' />
                    <p>We are a family restaurant</p>
                </div> 
                
                <div>
                    <h3>Important Links</h3>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Menu</a></li>
                            <li><a href='/'>Reservations</a></li>
                            <li><a href='/'>Order Online</a></li>
                            <li><a href='/'>Login</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div>
                    <h3>Contact</h3>
                    <address>
                        <ul>
                            <li>Address: <br />111 Tom, CA, US</li>
                            <li>Phone: <br />234-234-234</li>
                            <li>Email: <br /><a href="mailto:lemon@lemon.com">lemon@lemon.com</a></li>
                        </ul>
                    </address>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
