import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ name, description }) => (
  <tbody>
    <tr>
      <td><h4>{name}</h4></td>
      <td>{description}</td>
      <td>
        <span>Active Member</span>
      </td>
      <td>
        <button type="button">Join Mission</button>
      </td>
    </tr>
  </tbody>
);

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};

export default MissionItem;
