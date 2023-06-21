/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/mission/missionSlice';
import MissionItem from './MissionItem';
import '../styles/missions.css';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missionItems = useSelector((state) => state.mission);
  return (
    <ul>
      <table>
        <tr className="t-row">
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
        {missionItems.map((item) => (
          <MissionItem
            key={item.mission_id}
            name={item.mission_name}
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
