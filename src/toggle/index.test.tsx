import { render } from '@testing-library/react';
import { Toggle } from './index';

describe('Toggle', () => {
  it('renders without crashing', () => {
    render(<Toggle />);
  });
}); 