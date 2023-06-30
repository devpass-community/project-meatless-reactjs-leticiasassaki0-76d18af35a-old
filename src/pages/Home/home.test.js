
import {render, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '.'

describe('<Home />', () => {
  test(' should render home page', () => {
    render(<Home />)
    expect('meatless-pageHome').toBeInTheDocument()
  })
  
  test('Restaurant List - should render list with restaurant cards', () => {
    const list = getByTestId('meatless-restaurantList')
    const restaurantCard = getByTestId('meatless-restaurantCard')
  
    render(<Home />)
    expect(list).toContainElement(restaurantCard)
    expect(restaurantCard).not.toContainElement(list)
  })
})

