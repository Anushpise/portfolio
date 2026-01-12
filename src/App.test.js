import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loader image', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/loading/i);
  expect(imgElement).toBeInTheDocument();
});
