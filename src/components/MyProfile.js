import React from 'react';
import { useSelector } from 'react-redux';
import { selectRockets } from '../redux/store';
import '../styles/profile.css';

const MyProfile = () => {
  const { rockets } = useSelector(selectRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.mission.missions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <>
      <div>
        <h3>My Mission</h3>
        <ul>
          {reservedMissions.map((reservedMission) => (
            <li key={reservedMission.mission_id} data-id="mission">{reservedMission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>My rockets</h3>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className="rocks">{rocket.name}</li>
          ))}
        </ul>
      </div>

    </>
  );
};

export default MyProfile;
