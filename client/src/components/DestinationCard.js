import React from 'react';
import styles from './DestinationCard.module.css';

function DestinationCard({ destination }) {
  const imageUrl = "https://www.blue-style.cz/images/pages-meta/bs-dovolena-u-more-meta-obrazky-2022-06-23-14-48-31.jpg"; // URL vašeho obrázku
  return (
    <div className={styles.card}>
      <div 
        className={styles.cardImage} 
        style={{ backgroundImage: `url(${imageUrl})` }}  // Nastavení obrázku jako pozadí
      ></div>
      <div className={styles.cardText}>
        <span className={styles.date}>{destination.location}</span>
        <h2>{destination.name}</h2>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <div className={styles.cardStats}>
        <div className={styles.stat}>
          <div className={styles.value}>{destination.id}</div>
          <div className={styles.type}>ID</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{destination.score}</div>
          <div className={styles.type}>Score</div>
        </div>
        <div className={styles.stat}>
          <div className={styles.value}>{destination.tag}</div>
          <div className={styles.type}>Tag</div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
