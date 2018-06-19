import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../config/store'

import Root from '../components/Root'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
}
