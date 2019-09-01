import React from 'react'
import useGlobal from '../../store'
import LazyLoad from 'react-lazyload'

const Pokemon = ({ pokemon }) => {
  const [, globalActions] = useGlobal()

  return (
    <div className="pokemon">
      <LazyLoad>
        <button
          type="button"
          className="pokemon__sprite"
          onClick={() => globalActions.getPokemon(pokemon.id)}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </LazyLoad>
    </div>
  )
}

export default Pokemon
