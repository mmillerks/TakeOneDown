const React = require('react')

class Show extends React.Component {
  render () {
   const bottles = this.props.bottles
    return (
      <div>
      <h1> 99 Bottles of Beer On the Wall </h1>
      <a href="/bottles" >Take one down, pass it around.</a>
      {/* needs to be linked to the count down */}
      </div>
      );
     }
   }
  module.exports  = Show;