import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render header', () => {
  render(<App />);
  const headerEl = screen.getByText(/Header/i);
  expect(headerEl).toBeInTheDocument();
});
