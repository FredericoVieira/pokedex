import React, { useEffect, useState } from 'react'
import hardtack from 'hardtack'
import useGlobal from '../../store'
import Pokemon from '../pokemon/cmp-pokemon'
import Search from '../search/cmp-search'
import Modal from '../modal/cmp-modal'
import Loader from 'react-loader'

const Page = () => {
  const [globalState, globalActions] = useGlobal()
  const [localState, localSetState] = useState({
    searchString: '',
    pokemonsIds: []
  })
  const { searchString, pokemonsIds } = localState
  const { error, loaded, modal, pokemons } = globalState
  const { collection } = pokemons

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
      <li key={pokemon.id} className="pokemons__item">
        <Pokemon pokemon={pokemon} />
      </li>
    )
  })

  const handleError = () => (
    <section className="page-error">
      <div className="page-error__box">
        <span className="page-error__box--status">{error.response.status}</span>
        <span className="page-error__box--status-text">
          {`: ${error.response.data}`}
        </span>
        <p>Whoops! Something went wrong!</p>
        <hr className="page-error__box--line" />
        <p>There was an error loading the pokedex.</p>
      </div>
    </section>
  )

  return (
    <div className="page">
      <div className="page__search">
        <Search onChange={handleSearch} value={searchString} />
      </div>
      {error && handleError()}
      {modal && <Modal />}
      <ul className="pokemons">{pokemonsToShow}</ul>
      <Loader loaded={loaded} color="white" />
    </div>
  )
}

export default Page
