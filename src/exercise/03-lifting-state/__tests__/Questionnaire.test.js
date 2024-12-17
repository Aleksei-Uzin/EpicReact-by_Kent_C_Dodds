import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Questionnaire } from '../Questionnaire'

test('Lifting state works', async () => {
  render(<Questionnaire />)

  await userEvent.type(screen.getByRole('textbox', { name: /name/i }), 'mulan')
  await userEvent.type(
    screen.getByRole('textbox', { name: /animal/i }),
    'dragon'
  )

  expect(
    screen.getByText('Hey mulan, your favorite animal is: dragon!')
  ).toBeInTheDocument()
})
