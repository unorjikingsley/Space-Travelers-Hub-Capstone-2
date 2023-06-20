import React from 'react';
import PropTypes from 'prop-types';

const MissionItem = ({ name, description, id }) => (
  <li>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{id}</p>
  </li>
);

MissionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MissionItem;
