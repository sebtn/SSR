const React = require('react')
const connect = require('react-redux').connect
const Link = require('react-router').Link

var Layout = React.createClass({
  handlerClick: function(){
    alert('hello dummy')
  },
  render: function() {
    var custom = this.props.custom
   return(
     <html>
       <head>
         <link rel="stylesheet" href="/style.css" data-reactid={3}/>
         <title > SSR reactJS</title>
       </head>
       <body>
         <div>
           <h1>{custom.title}</h1>
           <p>SSR is cool</p>
           <button onClick={this.handlerClick}>Clicker</button>
           {this.props.children}
           <ul>
             <li>
               <Link to="/"> Home</Link>
             </li>
             <li>
               <Link to="about"> About</Link>
             </li>
           </ul>
         </div>
         <script dangerouslySetInnerHTML={{__html: 
           'window.PROPS=' + JSON.stringify(custom) }} />
         <script src="/bundle.js" />
       </body>
     </html>
   )
  }
})

const wrapper = connect(
  function(state) {
    return {custom: state}
  }
)

module.exports = wrapper(Layout)