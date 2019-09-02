import React from 'react'
import { shallow, mount } from 'enzyme'
import useGlobal from '../../../store'
import Page from '../cmp-page'
import Search from '../../search/cmp-search'
import Loader from 'react-loader'
import { act } from 'react-dom/test-utils'

describe('Tests for <Page />', () => {
  it('renders page without crashing', () => {
    shallow(<Page />)
  })

  it('renders page and page__search divs', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.find('div').length).toBe(2)
    expect(wrapper.find('div.page').length).toBe(1)
    expect(wrapper.find('div.page__search').length).toBe(1)
  })

  it('renders search component', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.find(Search).length).toBe(1)
  })

  it('renders loader component', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.find(Loader).length).toBe(1)
  })

  it('renders ul component', () => {
    const wrapper = shallow(<Page />)
    expect(wrapper.find('ul.pokemons').length).toBe(1)
  })

  it('renders page with pokemons', () => {
    const FunctionalComponent = () => {
      const [, globalActions] = useGlobal()
      globalActions.setPokemons([
        { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
        { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
        { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' }
      ])
      return null
    }
    shallow(<FunctionalComponent />)

    const wrapper = mount(<Page />)
    expect(wrapper.find('li.pokemons__item').length).toBe(3)
    expect(
      wrapper
        .find('li.pokemons__item')
        .at(0)
        .key()
    ).toBe('4')
    expect(
      wrapper
        .find('li.pokemons__item')
        .at(1)
        .key()
    ).toBe('5')
    expect(
      wrapper
        .find('li.pokemons__item')
        .at(2)
        .key()
    ).toBe('6')
  })
})
