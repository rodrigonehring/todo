import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider } from 'material-ui/styles'
import Board from './containers/Board'
import AppContainer from './components/AppContainer'
import theme from './createTheme'


import configureStore from './configureStore'

const store = configureStore()


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppContainer>
            <Reboot />
            <Board />
          </AppContainer>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
