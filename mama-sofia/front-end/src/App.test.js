import React from 'react';
import { render } from '@testing-library/react';
import App from './App';


// Checking if the header text exists
test('Checks if the header exists', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Here are our suggestions for today!/i);
  expect(linkElement).toBeInTheDocument();
});
