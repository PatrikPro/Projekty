import React from 'react';
import styles from './DestinationCard.module.css'; // Import stylů

function DestinationCard({ destination }) {
    return (
        <div className={styles.card}>
            <div className={styles.rank}>{destination.id}</div>
            <div className={styles.details}>
                <h2>{destination.name}</h2>
                <p>{destination.location}</p>
                <p className={styles.tag}>{destination.tag}</p>
                <div className={styles.score}>Score: {destination.score}</div>
                <div className={styles.actions}>
                    <button className={styles.actionButton}>+</button>
                    <button className={styles.actionButton}>♥</button>
                </div>
            </div>
        </div>
    );
}

export default DestinationCard;
