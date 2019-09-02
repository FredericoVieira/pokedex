import requester from '../resources/requester'

export const setPokemons = (store, newPokemons) => {
  const pokemons = {
    ...store.state.pokemons,
    collection: newPokemons.reduce((accumulator, item) => {
      const { url } = item
      const id = url.substring(34, url.length - 1)

      return {
        ...accumulator,
        [id]: {
          id,
          ...item
        }
      }
    }, {})
  }
  store.setState({ ...store.state, pokemons })
}

export const setPokemon = (store, newPokemon) => {
  const pokemons = {
    ...store.state.pokemons,
    selected: newPokemon
  }

  store.actions.showModal(true)

  store.setState({ ...store.state, pokemons })
}

export const getPokemons = async store => {
  const limit = 784
  store.actions.loaded(false)
  const [error, response] = await requester('GET', `pokemonaa/?limit=${limit}`)
  if (error) store.actions.error(error)
  else setPokemons(store, response.data.results)
  store.actions.loaded(true)
}

export const getPokemon = async (store, id) => {
  store.actions.loaded(false)
  const [error, response] = await requester('GET', `pokemon/${id}`)
  if (error) setPokemon(store, response.data)
  else setPokemons(store, response.data.results)
  store.actions.loaded(true)
}
