import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard'; 
import destinations from '../destinations.json'; 

function TopDestinations() {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    const addToWishlist = (destination) => {
        if (!wishlist.some(dest => dest.id === destination.id)) {
            const newWishlist = [...wishlist, destination];
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist));
        }
    };

    const removeFromWishlist = (destination) => {
        const newWishlist = wishlist.filter(dest => dest.id !== destination.id);
        setWishlist(newWishlist);
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    };

    const isWishlisted = (destination) => {
        return wishlist.some(dest => dest.id === destination.id);
    };

    return (
        <div>
            <h1>Top 100 Destinations</h1>
            {destinations.map(destination => (
                <DestinationCard 
                    key={destination.id} 
                    destination={destination} 
                    addToWishlist={addToWishlist} 
                    removeFromWishlist={removeFromWishlist}
                    isWishlisted={isWishlisted(destination)}
                />
            ))}
        </div>
    );
}

export default TopDestinations;
