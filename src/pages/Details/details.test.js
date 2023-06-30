import {render, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import Details from '.'

describe('<Details />', () => {
  test(' should render details page', () => {
    render(<Details />)
    expect('meatless-pageHome').toBeInTheDocument()
  })
  
  test('should render list with dishes cards', () => {
    const list = getByTestId('meatless-pageDetails-DishList')
    const dishCard = getByTestId('meatless-dishCard')
  
    render(<Details />)
    expect(list).toContainElement(dishCard)
    expect(dishCard).not.toContainElement(list)
  })
})
