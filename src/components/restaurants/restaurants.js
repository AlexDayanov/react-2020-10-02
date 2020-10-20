import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

const Restaurants = ({ restaurants }) => {
  const tabs = Object.values(restaurants).map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant id={restaurant.id} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = PropTypes.shape({
  id: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
});

export default connect((state) => ({
  restaurants: state.restaurants,
}))(Restaurants);
