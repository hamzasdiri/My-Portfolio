import { render, screen } from '@testing-library/react';
import App from './App';

test('simple test', () => {
  render(<App />);
  const appComponent = screen.getByTestId('app-component');
  expect(appComponent).toBeInTheDocument();
});
