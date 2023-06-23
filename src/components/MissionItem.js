import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelMission, joinMission } from '../redux/mission/missionSlice';
import '../styles/missions.css';

const MissionItem = ({
  name, description, id, joined, index,
}) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr className={index % 2 === 0 ? 'deep-shade-row' : 'light-shade-row'}>
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
          {joined ? (
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
          )}
        </td>
      </tr>
    </tbody>
  );
};

MissionItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  joined: PropTypes.bool,
  index: PropTypes.number.isRequired,
};
MissionItem.defaultProps = {
  name: null,
  description: null,
  id: null,
  joined: false,
};

export default MissionItem;
