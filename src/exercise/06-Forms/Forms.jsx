import { UsernameForm } from './UsernameForm'

export const Forms = () => {
  const onSubmitUsername = username => console.log(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}
