import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Board from './containers/Board'

import configureStore from './configureStore'

const store = configureStore()


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Board />
        </div>
      </Provider>
    )
  }
}

export default App
