import React from 'react';
import styles from '../styles/Review.module.css';

interface ReviewProps {
  courseName: string;
  userName: string;
  daysAgo: string;
  rating: number;
  reviewText: string;
}

const Review: React.FC<ReviewProps> = ({ courseName, userName, daysAgo, rating, reviewText }) => (
  <div className={styles.review}>
    <div className={styles.header}>
      <h3>Course Name: {courseName}</h3>
      <div className={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <img key={i} src={`./assets/icon-${i < rating ? 'star-filled' : 'star-empty'}.svg`} alt="star" />
        ))}
      </div>
    </div>
    <div className={styles.userInfo}>
      <img src="./assets/ellipse-1.svg" alt="user avatar" />
      <div>
        <p>{userName}</p>
        <p>{daysAgo}</p>
      </div>
    </div>
    <p className={styles.reviewText}>{reviewText}</p>
  </div>
);

export default Review;
