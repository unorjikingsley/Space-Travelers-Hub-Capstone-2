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
        <span>{rocket.rocket_name}</span>
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
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
