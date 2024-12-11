export const UsernameForm = ({ onSubmitUsername }) => {
  const handleSubmit = event => {
    event.preventDefault()
    const { value } = event.target.elements.username
    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
