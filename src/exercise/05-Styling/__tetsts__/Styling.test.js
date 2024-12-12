import { render, screen } from '@testing-library/react'
import { Styling } from '../Styling'

test('renders the correct styles new', () => {
  render(<Styling />)

  const allBoxes = screen.getAllByText(/box/i)
  const className = 'box'

  allBoxes.forEach(box => {
    expect(box).toHaveClass(className)
    expect(box).toHaveStyle('font-style: italic;')
  })

  const small = screen.getByText(/small/i)
  const medium = screen.getByText(/medium/i)
  const large = screen.getByText(/large/i)

  expect(small).toHaveClass('box--small')
  expect(small).toHaveStyle('background-color: lightblue;')

  expect(medium).toHaveClass('box--medium')
  expect(medium).toHaveStyle('background-color: pink;')

  expect(large).toHaveClass('box--large')
  expect(large).toHaveStyle('background-color: orange;')
})
