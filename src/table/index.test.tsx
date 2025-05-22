import { render } from '@testing-library/react';
import { Table } from './index';

describe('Table', () => {
  it('renders without crashing', () => {
    render(<Table />);
  });
}); 