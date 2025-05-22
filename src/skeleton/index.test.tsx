import { render } from '@testing-library/react';
import { Skeleton } from './index';

describe('Skeleton', () => {
  it('renders without crashing', () => {
    render(<Skeleton />);
  });
}); 