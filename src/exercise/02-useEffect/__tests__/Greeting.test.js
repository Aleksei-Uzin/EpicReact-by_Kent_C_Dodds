import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Greeting } from '../Greeting'

afterEach(() => {
  window.localStorage.removeItem('name')
})

test('App works', async () => {
  const { rerender } = render(<Greeting />)
  const inputTextbox = screen.getByRole('textbox', { name: /name/i })

  await userEvent.clear(inputTextbox)
  await userEvent.type(inputTextbox, 'bob')

  expect(screen.getByText(/hello.*bob/i)).toBeInTheDocument()

  // make sure it's initializ
  window.localStorage.setItem('name', '"jill"')
  rerender(<Greeting key="new" />)

  expect(screen.getByRole('textbox', { name: /name/i })).toHaveValue('jill')
  expect(screen.getByText(/hello.*jill/i)).toBeInTheDocument()
})
