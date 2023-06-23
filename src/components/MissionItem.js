import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { cancelMission, joinMission } from '../redux/mission/missionSlice';
import '../styles/missions.css';

const MissionItem = (props) => {
  // const dispatch = useDispatch();
  const {
    name, description, id, joined,
  } = props;

  const handleClick = (e, { reserved }) => {
    e.preventDefault();
    if (reserved) {
      // dispatch(cancelMission({ id }));
    } else {
      // dispatch(joinMission({ id }));
    }
  };

  return (
    <tbody>
      <tr>
        <td>
          <h4>{name}</h4>
        </td>
        <td className="description">{description}</td>
        <td className="status">
          <p>
            {joined ? (
              <span className="active-member">Active Member</span>
            ) : (
              <span className="not-a-member">Not a Member</span>
            )}
          </p>
        </td>
        <td className="join">
          {/* {joined ? (
            <button
              type="button"
              className="leave-mission"
              onClick={() => {
                dispatch(cancelMission(id));
              }}
            >
              Cancel Mission
            </button>
          ) : (
            <button
              type="button"
              className="join-mission"
              onClick={() => {
                dispatch(joinMission(id));
              }}
            >
              Join Mission
            </button>
          )} */}

          <button
            type="button"
            onClick={(e) => {
              handleClick(e, { id, joined });
            }}
          >
            {joined ? 'Leave mission' : 'Join mission'}
          </button>
        </td>
      </tr>
    </tbody>
  );
};

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default MissionItem;
