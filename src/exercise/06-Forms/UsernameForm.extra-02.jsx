import { useState } from 'react'

export const UsernameForm = ({ onSubmitUsername }) => {
  const [error, setError] = useState(null)

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { value } = event.target.elements.username
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}
