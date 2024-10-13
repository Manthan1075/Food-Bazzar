import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './card.css';

const Buyingpage = () => {
    const hotel = "Taj Hotel";

    const location = useLocation();
    const { food = "Default Food", price = "0", source = "default-img-src" } = location.state || {};

    useEffect(() => {
        gsap.from(".card", {
            x: 1000,
            scale: 0,
            opacity: 0,
            delay: 0.5
            
        });
    }, []);

    return (
        <div className='card-container'>
            <div className='card'>
                <img src={source} alt='Food img' />
                <h3>{food}</h3>
                <label>Delivery Details :</label>
                <p className='hotel'>Restaurant : {hotel}</p>
                <p className='time'>Time : 30 Minutes</p>
                <p className='delivery-type'>Type : Free Delivery</p>
                <p className='price'>Price : {price}₹</p>
                <button>Order Now!</button>
            </div>
            <button className='backbtn' onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
};

export default Buyingpage;
