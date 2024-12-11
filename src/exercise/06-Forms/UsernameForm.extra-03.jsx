import { useState } from 'react'

export const UsernameForm = ({ onSubmitUsername }) => {
  const [username, setUserName] = useState('')

  const handleChange = event => {
    const lowerCaseValue = event.target.value.toLowerCase()
    setUserName(lowerCaseValue)
  }

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(username)
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
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
