import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions } from "../redux/mission/missionSlice";
import MissionItem from "./MissionItem";

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const missionItems = useSelector((state) => state.mission);
  return (
    <div>
      <table>
        <tr>
          <td>Name</td>
          <td>Description</td>
          <td>Status</td>
          <td />
        </tr>
        {missionItems.map((item) => (
          <MissionItem
            key={item.mission_id}
            name={item.mission_name}
            description={item.description}
            id={item.id}
          />
        ))}
      </table>
    </div>
  );
};

export default Missions;
