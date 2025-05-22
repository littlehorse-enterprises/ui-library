import { render } from '@testing-library/react';
import { Tabs } from './index';

describe('Tabs', () => {
  it('renders without crashing', () => {
    render(<Tabs />);
  });
}); 