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
    }, {}),
    isFetched: true
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
  const [error, response] = await requester('GET', `pokemon/?limit=${limit}`)
  setPokemons(store, response.data.results)
}

export const getPokemon = async (store, id) => {
  const [error, response] = await requester('GET', `pokemon/${id}`)
  setPokemon(store, response.data)
}
