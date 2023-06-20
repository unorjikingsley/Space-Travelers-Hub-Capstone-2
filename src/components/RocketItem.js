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

// const Li = styled.li`
//   display: flex;
//   // border: 3px solid black;
//   margin: 1rem;
//   border-radius: 1rem;
//   padding: 1rem;

//   .img {
//     display: flex;
//     align-items: center;

//     img {
//       width: 10rem;
//       padding-left: 1rem;
//     }
//   }

//   .details {
//     display: flex;
//     gap: 1rem;
//     flex-direction: column;
//     margin-left: 2rem;
//     justify-content: center;

//     .reserved {
//       font-size: 10px;
//       border-radius: 0.2rem;
//       margin-right: 0.5rem;
//       padding: 0.2rem;
//       background-color: green;
//       color: white;
//     }

//     .reserve-btn {
//       max-width: fit-content;
//       padding: 0.5rem;
//       background-color: blue;
//       cursor: pointer;
//       border-radius: 0.4rem;
//       color: white;
//       border: transparent;
//     }
//   }
// `;
