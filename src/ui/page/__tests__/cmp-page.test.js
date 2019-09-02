import React from 'react'
import { shallow } from 'enzyme'
import Page from '../cmp-page'
import Search from '../../search/cmp-search'
import Loader from 'react-loader'

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
})
