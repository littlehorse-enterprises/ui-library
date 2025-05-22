import { render } from '@testing-library/react';
import { Toaster } from './index';

describe('Toaster', () => {
  it('renders without crashing', () => {
    render(<Toaster />);
  });
}); 