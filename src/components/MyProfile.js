import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { missionList } = useSelector((state) => state.mission);
  const joinedMission = missionList.filter((mission) => mission.joined === true);

  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div>
      <div>
        <ul>
          <h2>My Missions</h2>
          {joinedMission.length > 0
            ? joinedMission.map((mission) => (
              <li key={mission.id}>
                <h4>{mission.name}</h4>
              </li>
            ))
            : <li>No Joined Missions Yet</li>}
        </ul>
      </div>
      <div>
        <ul>
          <h2>My Rockets</h2>
          {reservedRockets.length > 0
            ? reservedRockets.map((rocket) => (
              <li key={rocket.id}>
                <h3>{rocket.name}</h3>
              </li>
            ))
            : <li>No reserved rockets</li>}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
