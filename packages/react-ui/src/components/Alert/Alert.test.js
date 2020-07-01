import React from 'react';
import { render } from '@testing-library/react';
import { Alert } from './Alert';

test('renders alert component', () => {
  const { getByText } = render(<Alert />);
  const elementItem = getByText(/Alerta/i);

  expect(elementItem).toBeInTheDocument();
});
