import * as React from 'react'

function Greeting({initialName = 'Alex'}) {
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    setName(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" value={name} onChange={handleChange} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
