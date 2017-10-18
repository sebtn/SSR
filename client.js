const React = require('react')
const ReactDOM = require('react-dom')
const routes = require('./routes/routes.jsx')
const Redux = require('redux')
var Provider = require('react-redux').Provider

function reducer(state) { return state }
var store = Redux.createStore(reducer, window.PROPS)

ReactDOM.render(
  <Provider store={store}>
    {routes} 
  </Provider>,
  document
)

