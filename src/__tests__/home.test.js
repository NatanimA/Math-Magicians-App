import Home from '../components/Home'
import renderer from 'react-test-renderer';

describe("Tests Home component", () => {
    it("Should render Home component",() => {
        const tree = renderer.create(<Home />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})