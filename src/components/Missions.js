/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';
import '../styles/missions.css';

const Missions = () => {
  const { missionList } = useSelector((state) => state.mission);
  return (
    <ul>
      <table>
        <tr className="t-row">
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
        {missionList.map((item, index) => (
          <MissionItem
            key={item.id}
            index={index}
            name={item.name}
            description={item.description}
            id={item.id}
            joined={item.joined}
          />
        ))}
      </table>
    </ul>
  );
};

export default Missions;
