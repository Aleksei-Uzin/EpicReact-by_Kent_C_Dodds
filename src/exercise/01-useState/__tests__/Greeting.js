import { render, screen } from '@testing-library/react'
import { Greeting } from '../Greeting'
import userEvent from '@testing-library/user-event'

test('typing a name shows a greeting', async () => {
  render(<Greeting />)

  const input = screen.getByRole('textbox', {
    name: /name/i,
  })

  await userEvent.type(input, 'bob')

  const result = screen.getByText(/hello.*bob/i)

  expect(result).toBeInTheDocument()
})
