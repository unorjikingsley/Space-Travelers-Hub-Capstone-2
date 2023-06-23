import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { missionList } = useSelector((state) => state.mission);
  const joinedMission = missionList.filter((mission) => mission.joined === true);

  return (
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
  );
}

export default Profile;
