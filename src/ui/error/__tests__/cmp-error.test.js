import React from 'react'
import { shallow } from 'enzyme'
import useGlobal from '../../../store'
import Error from '../cmp-error'

describe('Tests for <Error />', () => {
  const error = {
    response: {
      status: '404',
      data: 'Not found'
    }
  }

  it('renders error without crashing', () => {
    shallow(<Error error={error} />)
  })

  it('renders error section', () => {
    const wrapper = shallow(<Error error={error} />)
    expect(wrapper.find('section').length).toBe(1)
    expect(wrapper.find('section').hasClass('page-error')).toBe(true)
  })

  it('renders error div', () => {
    const wrapper = shallow(<Error error={error} />)
    expect(wrapper.find('div').length).toBe(1)
    expect(wrapper.find('div').hasClass('page-error__box')).toBe(true)
  })

  it('renders error p', () => {
    const wrapper = shallow(<Error error={error} />)
    expect(wrapper.find('p').length).toBe(2)
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toEqual('Whoops! Something went wrong!')
    expect(
      wrapper
        .find('p')
        .last()
        .text()
    ).toEqual('There was an error loading the pokedex.')
  })

  it('renders error with 404 not found', () => {
    const wrapper = shallow(<Error error={error} />)
    expect(wrapper.find('span.page-error__box--status').text()).toEqual('404')
    expect(wrapper.find('span.page-error__box--status-text').text()).toEqual(
      ': Not found'
    )
  })
})
