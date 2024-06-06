import React from 'react';
import DestinationCard from './DestinationCard'; 
import destinations from '../destinations.json'; 

function TopDestinations() {
    return (
        <div>
            <h1>Top 100 Destinations</h1>
            {destinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
            ))}
        </div>
    );
}

export default TopDestinations;


