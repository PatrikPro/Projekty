import React from 'react';
import DestinationCard from './DestinationCard'; // Import komponenty
import destinations from '../destinations.json'; // Ujistěte se, že cesta k souboru je správná

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


