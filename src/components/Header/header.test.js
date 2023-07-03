import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '.'

jest.mock('react-router-dom', () => ({
  Link: 'a',
}));

describe('<Header />', () => {
  const onClickHandle = jest.fn()

  afterEach(() => {
    onClickHandle.mockClear()
  })

  test('should display cart component ', async () => {
    const { findByTestId } = render(<Header onClick={onClickHandle} />)
    const showCartButton = await findByTestId('meatless-HeaderCartButton')

    userEvent.click(showCartButton)
    const isVisible = await findByTestId('meatless-HeaderCart')

    expect(isVisible).toBeVisible()
  })
})
