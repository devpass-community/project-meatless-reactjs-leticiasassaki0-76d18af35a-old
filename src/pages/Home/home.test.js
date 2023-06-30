
import {render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '.'

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('<Home />', () => {
  const mockRestaurantData = [
    { id: 1, name: 'Restaurant 1' }
  ];

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockRestaurantData),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render home page', () => {
    render(<Home />)
    expect(screen.getByTestId('meatless-pageHome')).toBeInTheDocument()
  })
  
  test('Restaurant List - should render list with restaurant cards', async () => {
    await act(async () => {
      render(<Home />);
    });
    const list = screen.getByTestId('meatless-restaurantList')
    const restaurantCard = screen.getByTestId('meatless-restaurantCard')
    
    expect(list).toContainElement(restaurantCard)
    expect(restaurantCard).not.toContainElement(list)
  })
})

