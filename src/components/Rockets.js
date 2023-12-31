import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, rocketUrl } from '../redux/rocket/rocketSlice';
import RocketItem from './RocketItem';
import { selectRockets } from '../redux/store';

const Rockets = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading, error } = useSelector(selectRockets);

  useEffect(() => {
    if (rockets.length > 0) return;
    dispatch(fetchRockets(rocketUrl));
  }, [dispatch, rockets.length]);

  if (error) {
    return (
      <div>
        Something went wrong:
        <br />
        &quot;
        {error}
        &quot;
      </div>
    );
  }

  return (
    <section>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <ul>
            {rockets.map((rocket) => (
              <RocketItem key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Rockets;
