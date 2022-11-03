// eslint-disable-next-line
import renderer from 'react-test-renderer';
// eslint-disable-next-line
import Home from '../components/Home';

describe('Tests Home component', () => {
  it('Should render Home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});