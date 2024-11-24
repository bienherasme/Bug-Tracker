import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.queryByText(/Bug Tracker/i);
  expect(titleElement).not.toBeNull(); // Ensures the element exists
  expect(titleElement).toBeInTheDocument();
});
