import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restaurantfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family restaurant</p>
                    <Link to="/booking">
                        <button aria-label="Reserve Table">Reserve Table</button>
                    </Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt="Delicious food served at Little Lemon restaurant" />
                </div>
            </section>
        </header>
    );
};

export default Header;
