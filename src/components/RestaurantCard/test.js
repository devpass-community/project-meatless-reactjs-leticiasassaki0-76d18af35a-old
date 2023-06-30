import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestaurantCard from '.'

describe('<RestaurantCard />', () => {
  const onClickHandle = jest.fn()

  afterEach(() => {
    onClickHandle.mockClear()
  })

  test('should redirect to restaurant detail page when the element is clicked', async () => {
    const { findByTestId } = render(<RestaurantCard onClick={onClickHandle} />)
    userEvent.click(await findByTestId('meatless-pageDetails'))
    expect(onClickHandle).toBeCalledTimes(1)
  })
})

