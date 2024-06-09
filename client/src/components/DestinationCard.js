import React from 'react';
import { FiHeart, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './DestinationCard.module.css';

function DestinationCard({ destination, addToWishlist, removeFromWishlist, isWishlisted }) {
  const navigate = useNavigate();

  const handlePlanTrip = () => {
    navigate('/plan-trip', { state: { destination } });
  };

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(destination);
    } else {
      addToWishlist(destination);
    }
  };

  return (
    <div className={styles.card}>
      <div 
        className={styles.cardImage} 
        style={{ backgroundImage: `url(${destination.image || 'https://www.blue-style.cz/images/pages-meta/bs-dovolena-u-more-meta-obrazky-2022-06-23-14-48-31.jpg'})` }}
      ></div>
      <div className={styles.cardText}>
        <span className={styles.date}>{destination.location}</span>
        <h2>{destination.name}</h2>
        <p>{destination.description || 'No description available.'}</p>
        <div className={styles.actions}>
          <FiPlus onClick={handlePlanTrip} className={styles.icon} style={{ cursor: 'pointer' }} />
          <FiHeart 
            onClick={handleWishlistClick} 
            className={styles.icon} 
            style={{ cursor: 'pointer', color: isWishlisted ? 'red' : 'black' }} 
          />
        </div>
      </div>
      <div className={styles.cardStats}>
        <div className={styles.stat}>
          <div className={styles.value}>{destination.id}</div>
          <div className={styles.type}>Rank</div>
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
