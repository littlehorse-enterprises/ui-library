import { render } from '@testing-library/react';
import { Select } from './index';

describe('Select', () => {
  it('renders without crashing', () => {
    render(<Select />);
  });
}); 