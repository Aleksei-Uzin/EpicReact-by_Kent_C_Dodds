import { useRef } from 'react'

export const UsernameForm = ({ onSubmitUsername }) => {
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" ref={inputRef} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
