import React, { useState, useEffect } from 'react';
import DestinationCard from './DestinationCard'; 
import { Container, Row, Col } from 'react-bootstrap';

function Wishlist() {
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
        <Container>
            <h1 className="mt-4">Your Wishlist</h1>
            <Row>
                {wishlist.length === 0 ? (
                    <p>You have no destinations in your wishlist.</p>
                ) : (
                    wishlist.map(destination => (
                        <Col key={destination.id} md={4} className="mb-4">
                            <DestinationCard 
                                destination={destination} 
                                addToWishlist={addToWishlist} 
                                removeFromWishlist={removeFromWishlist}
                                isWishlisted={isWishlisted(destination)}
                            />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
}

export default Wishlist;
