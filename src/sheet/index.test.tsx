import { render } from '@testing-library/react';
import { Sheet } from './index';

describe('Sheet', () => {
  it('renders without crashing', () => {
    render(<Sheet />);
  });
}); 