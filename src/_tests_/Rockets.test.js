import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';
import { withProvider } from '../components/utils/testUtils';

test('renders RocketsPage correctly', () => {
  const rockets = [
    {
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon9.jpg',
      reserved: false,
    },
  ];

  const tree = renderer
    .create(withProvider(<Rockets rockets={rockets} />))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
