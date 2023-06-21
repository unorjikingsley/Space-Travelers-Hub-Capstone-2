import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/mission/missionSlice';

const MissionItem = ({
  name, description, id, joined,
}) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td>
          <h4>{name}</h4>
        </td>
        <td>{description}</td>
        <td>
          <p>
            {joined ? <span>Active Member</span> : <span>Not a Member</span>}
          </p>
        </td>
        <td>
          <button
            type="button"
            className="join-mission"
            onClick={() => {
              dispatch(joinMission(id));
            }}
          >
            Join Mission
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
