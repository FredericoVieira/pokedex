import React from 'react'
import { shallow } from 'enzyme'
import Search from '../cmp-search'

describe('Tests for <Search />', () => {
  it('renders search without crashing', () => {
    shallow(<Search />)
  })

  it('renders input', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('input').length).toBe(1)
    expect(wrapper.find('input').hasClass('search')).toBe(true)
  })
})
