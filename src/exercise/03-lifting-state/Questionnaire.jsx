import { useState } from 'react'

import { Name } from './components/Name'
import { FavoriteAnimal } from './components/FavoriteAnimal'
import { Display } from './components/Display'

export const Questionnaire = () => {
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')

  return (
    <form>
      <Name name={name} onNameChange={e => setName(e.target.value)} />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={e => setAnimal(e.target.value)}
      />
      <Display animal={animal} name={name} />
    </form>
  )
}
