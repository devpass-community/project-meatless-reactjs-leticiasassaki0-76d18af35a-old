import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '.';

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('<Details />', () => {
  test('should render details page', () => {
    render(<Details />);
    expect(screen.getByTestId('meatless-pageDetails')).toBeInTheDocument();
  });

  test('should render list with dishes cards', async () => {
    render(<Details />);
    expect(screen.getByTestId('meatless-pageDetails-DishList')).toBeInTheDocument();
  });
});
