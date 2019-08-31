import React from 'react'
import useGlobal from '../../store'

const Pokemon = ({ pokemon }) => {
  const [, globalActions] = useGlobal()

  return (
    <div className="pokemon">
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
    </div>
  )
}

export default Pokemon
