import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RenderingArrays } from '../RenderingArrays'

test('renders', async () => {
  render(<RenderingArrays />)

  const plus = screen.getByText(/add item/i)

  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)
  await userEvent.click(plus)

  const orangeContainer = screen.getByTestId('orange')
  const orangeInput = screen.getByLabelText(/orange/i)
  const inOrange = within(orangeContainer)

  await userEvent.type(orangeInput, 'sup dawg')
  await userEvent.click(inOrange.getByText('remove'))

  const allLis = screen.getAllByRole('listitem')

  Array.from(allLis).forEach(li => {
    const input = within(li).getByRole('textbox')
    const label = within(li).getByText(input.value)
    expect(label.textContent).toBe(input.value)
  })
})
