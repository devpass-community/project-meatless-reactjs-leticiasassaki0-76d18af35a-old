import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DishCard from '.'

describe('<DishCard />', () => {
  const onClickHandle = jest.fn()

  afterEach(() => {
    onClickHandle.mockClear()
  })

  test('should add +1 on amount of dish', async () => {
    const { findByTestId } = render(<DishCard onClick={onClickHandle} />)
    let amount = findByTestId('meatless-dishCardAmount')
    userEvent.click(await findByTestId('meatless-dishCardAddAmount'))
    expect(amount).toBe(amount + 1)
  })


  test('should add -1 on amount of dish', async () => {
    const { findByTestId } = render(<DishCard onClick={onClickHandle} />)
    let amount = findByTestId('meatless-dishCardAmount')
    userEvent.click(await findByTestId('meatless-dishCardSubtractAmount'))
    expect(amount).toBe(amount + 1)
  })
})
