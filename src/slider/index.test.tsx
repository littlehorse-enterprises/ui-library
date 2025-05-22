import { render } from '@testing-library/react';
import { Slider } from './index';

describe('Slider', () => {
  it('renders without crashing', () => {
    render(<Slider />);
  });
}); 