import React from 'react'
import useGlobal from '../../store'
import typesColors from '../../utils/typesColors'

const Modal = () => {
  const [globalState, globalActions] = useGlobal()
  const {
    id,
    name,
    types,
    abilities,
    height,
    weight
  } = globalState.pokemons.selected

  let arrayTypes = []
  if (types) arrayTypes = types.map(type => type.type.name)

  let imageStyle
  if (arrayTypes.length === 1)
    imageStyle = { borderColor: typesColors[arrayTypes[0]] }
  else if (arrayTypes.length === 2)
    imageStyle = {
      borderBottomColor: typesColors[arrayTypes[0]],
      borderLeftColor: typesColors[arrayTypes[0]],
      borderRightColor: typesColors[arrayTypes[1]],
      borderTopColor: typesColors[arrayTypes[1]]
    }

  let arrayAbilities = []
  if (abilities) arrayAbilities = abilities.map(ability => ability.ability.name)

  return (
    <div className="modal">
      <section className="modal__main">
        <img
          className="modal__main--image"
          style={imageStyle}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <li className="modal__list-item">
          <span className="modal__list-item--attribute">Name: </span>
          <span className="modal__list-item--capitalize">{name} </span>
          {`(#${id})`}
        </li>
        <li className="modal__list-item">
          <span className="modal__list-item--attribute">Types: </span>
          <span className="modal__list-item--capitalize">
            {arrayTypes.join(', ')}
          </span>
        </li>
        <li className="modal__list-item">
          <span className="modal__list-item--attribute">Abilities: </span>
          <span className="modal__list-item--capitalize">
            {arrayAbilities.join(', ')}
          </span>
        </li>
        <li className="modal__list-item">
          <span className="modal__list-item--attribute">Height: </span>
          {height} /{' '}
          <span className="modal__list-item--attribute">Weight: </span>
          {weight}
        </li>
        <button
          className="button"
          onClick={() => globalActions.showModal(false)}
        >
          Close
        </button>
      </section>
    </div>
  )
}

export default Modal
