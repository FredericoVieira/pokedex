import React, { useEffect, useState } from 'react'
import hardtack from 'hardtack'
import useGlobal from '../../store'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'

const Page = () => {
  const [globalState, globalActions] = useGlobal()
  const [localState, localSetState] = useState({
    searchString: '',
    pokemonsIds: [],
    error: null
  })
  const { searchString, pokemonsIds, error } = localState
  const { collection, isFetched } = globalState.pokemons

  useEffect(() => {
    globalActions.getPokemons()
  }, [])

  useEffect(
    () => {
      if (!searchString) {
        localSetState({
          ...localState,
          pokemonsIds: Object.keys(collection)
        })
      }
    },
    [collection]
  )

  const handleSearch = event => {
    const value = event.currentTarget.value.toLowerCase().trim()
    const { collection } = globalState

    hardtack.set('searchString', value, {
      maxAge: '31536000'
    })

    if (value === '') {
      return localSetState({
        ...localState,
        pokemonsIds: Object.keys(collection),
        searchString: value
      })
    }

    const pokemonsIds = Object.keys(collection).filter(pokemonId => {
      const pokemon = collection[pokemonId]

      return pokemon.name.includes(value)
    })

    localSetState({
      ...localState,
      pokemonsIds,
      searchString: value
    })
  }

  const pokemons = pokemonsIds.map(pokemonId => {
    const pokemon = collection[pokemonId]

    return (
      <li className="pokemons__item" key={pokemon.id}>
        <Pokemon pokemon={pokemon} />
      </li>
    )
  })

  return (
    <div className="page">
      {error && <div className="page__error">{error}</div>}
      <div className="page__search">
        <Search onChange={handleSearch} value={searchString} />
      </div>
      {isFetched ? <ul className="pokemons">{pokemons}</ul> : <p>Loading...</p>}
    </div>
  )
}

export default Page
