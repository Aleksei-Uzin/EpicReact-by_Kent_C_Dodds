import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Forms } from '../Forms'

beforeAll(() => {
  jest.spyOn(global.console, 'log').mockImplementation(() => {})
})

beforeEach(() => {
  global.console.log.mockClear()
})

test('calls the onSubmitUsername handler when the submit is fired', async () => {
  render(<Forms />)

  const input = screen.getByLabelText(/username/i)
  const submit = screen.getByText(/submit/i)

  let value = 'A'

  await userEvent.type(input, value)
  expect(input.value).toBe('a')

  await userEvent.click(submit)

  expect(global.console.log).toHaveBeenCalledWith(`You entered: ${input.value}`)
  expect(global.console.log).toHaveBeenCalledTimes(1)
})
