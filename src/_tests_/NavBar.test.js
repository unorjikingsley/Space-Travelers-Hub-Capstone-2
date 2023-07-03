import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

it('renders correctly', () => {
  const navBar = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(navBar).toMatchSnapshot();
});
