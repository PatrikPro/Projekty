import React from 'react';
import { FiHeart, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import styles from './DestinationCard.module.css'; // Ujistěte se, že máte správnou cestu ke stylům

function DestinationCard({ destination }) {
  const navigate = useNavigate();

  // Funkce pro navigaci na stránku Plánování cesty s předání dat
  const handlePlanTrip = () => {
    navigate('/plan-trip', { state: { destination } });
  };

  // Funkce pro přidání/odebrání destinace z wishlistu
  const handleToggleWishlist = () => {
    console.log("Toggle wishlist for", destination.name);
    // Zde by byla logika pro přidání/odebrání z wishlistu
  };

  return (
    <div className={styles.card}>
      <div 
        className={styles.cardImage} 
        style={{ backgroundImage: `url(${destination.image || 'https://www.blue-style.cz/images/pages-meta/bs-dovolena-u-more-meta-obrazky-2022-06-23-14-48-31.jpg'})` }}  // Ujistěte se, že máte výchozí obrázek, pokud není URL k dispozici
      ></div>
      <div className={styles.cardText}>
        <span className={styles.date}>{destination.location}</span>
        <h2>{destination.name}</h2>
        <p>{destination.description || 'No description available.'}</p>
        <div className={styles.actions}>
          <FiPlus onClick={handlePlanTrip} className={styles.icon} style={{ cursor: 'pointer' }} />
          <FiHeart onClick={handleToggleWishlist} className={styles.icon} style={{ cursor: 'pointer' }} />
        </div>
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
