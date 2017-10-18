const router = require('express').Router()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const Redux = require('redux')
const Provider = require('react-redux').Provider

function reducer(state) { return state }

// var Component = require('../Component')

router.get('*', function(req, res) {
  var InitalState = { title: "universal react using SSR" }
  var store = Redux.createStore(reducer, InitalState)
  ReactRouter.match({
    routes: require('./routes.jsx'),
    location: req.url
  }, function(error, redirectLocation, renderProps ) {
    if(renderProps) {
      const html = ReactDOMServer.renderToString(
        <Provider store={store} >
          <ReactRouter.RouterContext {...renderProps} /> 
        </Provider>
      )
      res.send(html)
    } else {
      res.status(404).send('not found')
    }
  })
})

module.exports = router