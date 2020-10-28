import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import reviews from '../../redux/reducer/reviews';

const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {Object.values(reviews).map((reviewId) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Reviews;
