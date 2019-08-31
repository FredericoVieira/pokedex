import React from 'react'
import useGlobal from '../../store'

const Modal = () => {
  const [globalState, globalActions] = useGlobal()
  const { name, types, height, weight } = globalState.pokemons.selected

  return (
    <div className="modal">
      <section className="modal__main">
        <span>Name:</span>
        <span>{name}</span>
        <span>Types:</span>
        <span>{''}</span>
        <span>Height:</span>
        <span>{height}</span>
        <span>Weight:</span>
        <span>{weight}</span>
        <button onClick={() => globalActions.showModal(false)}>close</button>
      </section>
    </div>
  )
}

export default Modal
