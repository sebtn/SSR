const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const browserHistory = ReactRouter.browserHistory
const IndexRoute = ReactRouter.IndexRoute


module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={require('../views/Layout.jsx')} >
      <IndexRoute component={require('../views/Index.jsx')}/>
      <Route path='about' component={require('../views/About.jsx')}/>
    </Route>
  </Router>
)