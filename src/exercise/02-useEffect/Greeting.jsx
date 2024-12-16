import { useLocalStorageState } from './useLocalStorageState'

export const Greeting = ({ initialName = '' }) => {
  const [name, setName] = useLocalStorageState('name', initialName)

  const handleChange = event => {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input id="name" onChange={handleChange} value={name} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}
