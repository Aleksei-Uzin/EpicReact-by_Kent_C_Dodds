import { UsernameForm } from './UsernameForm.extra-03'

export const App = () => {
  const onSubmitUsername = username => console.log(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
