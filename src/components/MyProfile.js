import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

function Profile() {
  const { missionList } = useSelector((state) => state.mission);
  const joinedMission = missionList.filter((mission) => mission.joined === true);

  const { rockets } = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="table-cont">
      <div className="table-container">
        <h2 className="table-head">My Missions</h2>
        <table>
          <tbody>
            {' '}
            {joinedMission.length > 0 ? (
              joinedMission.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Joined Missions Yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h2 className="table-head">My Rockets</h2>
        <table>
          <tbody>
            {' '}
            {reservedRockets.length > 0 ? (
              reservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No reserved rockets</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Profile;
