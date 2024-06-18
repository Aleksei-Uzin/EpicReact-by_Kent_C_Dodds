import {useUser} from './UserContext'

export function UserDataDisplay() {
  const [{user}] = useUser()
  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
