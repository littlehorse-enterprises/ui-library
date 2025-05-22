import { render } from '@testing-library/react';
import { ToggleGroup } from './index';

describe('ToggleGroup', () => {
  it('renders without crashing', () => {
    render(<ToggleGroup type="single" />);
  });
}); 