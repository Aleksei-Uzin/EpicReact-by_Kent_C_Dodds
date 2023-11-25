import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleSummit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleCange = ({target: {value}}) => {
    const isInputValid = /^\w*$/.test(value)

    setInputValue(value.toLowerCase())
    setError(
      isInputValid
        ? null
        : 'Username must contain only alphanumeric characters',
    )
  }

  return (
    <form onSubmit={handleSummit}>
      <div>
        <label htmlFor="usernameField">Username:</label>
        <input
          id="usernameField"
          type="text"
          value={inputValue}
          onChange={handleCange}
        />
      </div>
      <div role="alert" style={{color: 'red'}}>
        {error}
      </div>
      <button id="submitBtn" type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
