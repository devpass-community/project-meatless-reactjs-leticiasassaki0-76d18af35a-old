import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '.'

describe('<Header />', () => {
  const onClickHandle = jest.fn()

  afterEach(() => {
    onClickHandle.mockClear()
  })

  test('should display cart component ', async () => {
    const { findByTestId } = render(<Header onClick={onClickHandle} />)
    let showCartbutton = findByTestId('meatless-HeaderCartButton')
    let headerCart = findByTestId('meatless-HeaderCart')

    userEvent.click(showCartbutton)
    expect(headerCart).toBeVisible()
  })
})
