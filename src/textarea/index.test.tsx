import { render } from '@testing-library/react';
import { Textarea } from './index';

describe('Textarea', () => {
  it('renders without crashing', () => {
    render(<Textarea />);
  });
}); 