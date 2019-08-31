import React, { useEffect, useState } from 'react'
import hardtack from 'hardtack'
import useGlobal from '../../store'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'
import Modal from '../modal/cmp-modal'

const Page = () => {
  const [globalState, globalActions] = useGlobal()
  const [localState, localSetState] = useState({
    searchString: '',
    pokemonsIds: [],
    error: null
  })
  const { searchString, pokemonsIds, error } = localState
  const { modal, pokemons } = globalState
  const { collection, isFetched } = pokemons

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

    const pokemonsIds = Object.keys(collection).filter(pokemonId =>
      collection[pokemonId].name.includes(value)
    )

    localSetState({
      ...localState,
      pokemonsIds,
      searchString: value
    })
  }

  const pokemonsToShow = pokemonsIds.map(pokemonId => {
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
      {modal && <Modal />}
      {isFetched ? (
        <ul className="pokemons">{pokemonsToShow}</ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Page
