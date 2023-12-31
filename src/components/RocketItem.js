import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import '../styles/rocketStyle.css';
import {
  reserveRocket,
  cancelReserveRocket,
} from '../redux/rocket/rocketSlice';

const RocketItem = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleClick = (e, id) => {
    e.preventDefault();
    if (rocket.reserved === false) {
      dispatch(reserveRocket({ id }));
    } else {
      dispatch(cancelReserveRocket({ id }));
    }
  };

  return (
    <li className="list-api">
      <div className="img-div">
        <img src={rocket.flickr_images[0]} className="img-api" alt="rocket" />
      </div>
      <div className="div-api">
        <h2>{rocket.name}</h2>
        <p className="para-api">
          {rocket.reserved === true && (
            <span className="api-name">Reserved</span>
          )}
          {' '}
          {rocket.description}
        </p>

        <button
          onClick={(e) => {
            handleClick(e, rocket.id);
          }}
          className={`reserved ${rocket.reserved ? 'cancel' : 'reserve'}`}
          type="button"
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </li>
  );
};

export default RocketItem;

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};
