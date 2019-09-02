import React from 'react'
import { shallow } from 'enzyme'
import Pokemon from '../cmp-pokemon'

describe('Tests for <Pokemon />', () => {
  it('renders pokemon without crashing', () => {
    shallow(<Pokemon pokemon />)
  })

  it('renders pokemon div', () => {
    const wrapper = shallow(<Pokemon pokemon />)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').hasClass('pokemon')).toBe(true)
  })

  it('renders button', () => {
    const wrapper = shallow(<Pokemon pokemon />)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').hasClass('pokemon__sprite')).toBe(true)
  })

  it('renders pokemon name', () => {
    const pokemon = { name: 'Charmeleon' }
    const wrapper = shallow(<Pokemon pokemon={pokemon} />)
    expect(wrapper.find('p').length).toBe(1)
    expect(wrapper.find('p').hasClass('pokemon__name')).toBe(true)
    expect(wrapper.find('p').html()).toBe(
      '<p class="pokemon__name">Charmeleon</p>'
    )
  })
})
