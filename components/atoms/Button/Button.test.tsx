import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  it('Button renders with children', () => {
    const wrapper = shallow(<Button>Text</Button>);
    expect(wrapper.contains('Text'));
  });
});
