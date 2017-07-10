var React = require('react');
const styles = require('../inlinestyle.js'); // Inline styling required. why not?

class Content extends React.Component {
   constructor(props){
       super(props);
   }
   render() {
      return (
         <div>
           <h2 style = {styles.h2}><b> Item list </b></h2>
           <div style = {styles.main} className="well"> 
           {/* map function begins */}
           { this.props.item.map((food,index) => {
               return (
                        <div key={food.id} style={styles.content}>
                          <span>{index+1}. { food.name  }
                            <span className=" btn btn-info pull-right" 
                            style = {styles.span} onClick = {this.props.delete.bind(this,index)}>
                          {/* The delete props was actually passed as a props to the Content component
                            in the Container component. With the bind() method, we could actually bind the
                            delete props to the deleteItem method of the parent component , in this case 
                            is the Container component  
                          */}
                            remove
                            </span>
                          </span>
                          
                        </div>

                      ) 
                   }
                ) 
            } {/* Map function ends */}
           </div>
           
         </div>
         
      )
   }
}


module.exports = Content