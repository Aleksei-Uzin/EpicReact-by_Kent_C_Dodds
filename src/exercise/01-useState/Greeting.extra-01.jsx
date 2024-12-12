import { useState } from 'react'

export const Greeting = ({ initialName = '' }) => {
  const [name, setName] = useState(initialName)

  const handleChange = event => {
    const value = event.target.value
    setName(value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" value={name} onChange={handleChange} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
