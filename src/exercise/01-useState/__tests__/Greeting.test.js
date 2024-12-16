import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Greeting } from '../Greeting'

test('typing a name shows a greeting', async () => {
  render(<Greeting />)

  const input = screen.getByRole('textbox', {
    name: /name/i,
  })

  await userEvent.type(input, 'bob')

  const result = screen.getByText(/hello.*bob/i)

  expect(result).toBeInTheDocument()
})
