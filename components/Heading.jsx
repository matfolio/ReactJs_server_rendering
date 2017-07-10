var React = require('react');

class Heading extends React.Component {
   constructor(){
       super();
   }
   render() {
      return (
           <div className ="heading">
              <h1>{this.props.Title}</h1>
           </div>
      )
   }
}

module.exports = Heading