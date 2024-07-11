import * as React from 'react'
import {
  fetchPokemon,
  PokemonInfoFallback,
  PokemonForm,
  PokemonDataView,
  PokemonErrorBoundary,
} from '../pokemon'
import {createResource} from '../utils'

function PokemonInfo({pokemonResource}) {
  const pokemon = pokemonResource.read()

  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')
  const [pokemonResource, setPokemonResource] = React.useState(null)

  React.useEffect(() => {
    if (!pokemonName) {
      setPokemonResource(null)
      return
    }

    const resource = fetchPokemon(pokemonName)
    setPokemonResource(createResource(resource))
  }, [pokemonName])

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function resetErrorBoundary() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <React.Suspense
        fallback={
          <div className="pokemon-info">
            <PokemonInfoFallback name={pokemonName} />
          </div>
        }
      >
        <div className="pokemon-info">
          {pokemonResource ? (
            <PokemonErrorBoundary
              onReset={resetErrorBoundary}
              resetKeys={[pokemonName]}
            >
              <PokemonInfo pokemonResource={pokemonResource} />
            </PokemonErrorBoundary>
          ) : (
            'Submit a pokemon'
          )}
        </div>
      </React.Suspense>
    </div>
  )
}

export default App
