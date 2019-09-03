import React from 'react'
import { shallow } from 'enzyme'
import useGlobal from '../../../store'
import Modal from '../cmp-modal'

describe('Tests for <Modal />', () => {
  it('renders modal without crashing', () => {
    shallow(<Modal />)
  })

  it('renders modal div', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').hasClass('modal')).toBe(true)
  })

  it('renders modal_main section', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('section').length).toBe(1)
    expect(wrapper.find('section').hasClass('modal__main')).toBe(true)
  })

  it('renders modal__main--image img', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('img').length).toBe(1)
    expect(wrapper.find('img').hasClass('modal__main--image')).toBe(true)
  })

  it('renders modal__list-item li', () => {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('li').length).toBe(4)
    expect(wrapper.find('li.modal__list-item').length).toBe(4)
  })

  it('renders modal with pokemon infos', () => {
    const FunctionalComponent = () => {
      const [, globalActions] = useGlobal()
      globalActions.setPokemon({
        name: 'charmeleon',
        types: [{ type: { name: 'fire' } }],
        abilities: [
          { ability: { name: 'solar-power' } },
          { ability: { name: 'blaze' } }
        ],
        height: 11,
        weight: 190
      })
      return null
    }
    shallow(<FunctionalComponent />)

    const wrapper = shallow(<Modal />)
    expect(
      wrapper
        .find('span.modal__list-item--capitalize')
        .first()
        .text()
    ).toEqual('charmeleon')
    expect(
      wrapper
        .find('span.modal__list-item--capitalize')
        .at(1)
        .text()
    ).toEqual('fire')
    expect(
      wrapper
        .find('span.modal__list-item--capitalize')
        .at(2)
        .text()
    ).toEqual('solar-power, blaze')
    expect(
      wrapper
        .find('li.modal__list-item')
        .last()
        .text()
    ).toEqual('Height: 11 / Weight: 190')
  })
})
