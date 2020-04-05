// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
// Components
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import App from './App'
import configureStore from './redux'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
const history = createBrowserHistory()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./App', render)
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
