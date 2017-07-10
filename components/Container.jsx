var React = require('react');
var Content = require('./Content.jsx');
var Heading = require('./Heading.jsx');

const styles = require('../inlinestyle.js');
const { Map } = require('immutable')

// States are lifted to this component. All other component relies on this parent component.
// this is reasonable for separation of context. we could detect easily where and what might 
// lead to an error or a side-effect in our application.

class Container extends React.Component {
   constructor(){
       super(); 
       this.state = {
        title:"Welcome to Reactjs Server rendering",
        listOfFood: [],
        dummy: "",
        id: 0
      }
      // Since ES6 is been used, the need to bing all the used functions within
      // the component is necessa   ry.
      this.addItem = this.addItem.bind(this);
      this.setItem = this.setItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      
   }


   //This function would be used to add item to the list
   addItem() { 
      if( this.state.dummy.length == 0)
      {
        console.log("Empty content")
      }
      else {

        let foodItems =  this.state.dummy;
        let foodId = this.state.id++;
        let foodList = this.state.listOfFood;

        foodList.push({name:foodItems, id: foodId});     
        this.setState({listOfFood: foodList});
        this.setState({dummy: ""});
        console.log(foodList)
      }
      
   }
   
  // Lifecycle hook.
  componentWillMount() {
    console.log("This will mount");
  }

  // Lifecycle hook
  componentDidMount(){
      console.log("component did mount");
   }

   // This would be called when the input element value changes 
   // This is a controlled component with react event system
   // setItem ---- setting item value using the onChange 
   // method is meant for testing purpose
   setItem(e){
    let temp = e.target.value;
    this.setState({dummy: temp });



  }

   // Delete operation purpose.
   deleteItem(index) {
          let removedItem = this.state.listOfFood.splice((index), 1);
          this.setState({ listOfFood: this.state.listOfFood});
          console.log("Removed Item: " + removedItem[0].name)

     // }
     
   }

   render() {
      return (
         <html>
            
            <head>
           	  <meta charSet="utf-8"/>
      			  <meta name="viewport" content="width=device-width, initial-scale=1" />
      			  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
      			  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      			  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      			  <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
               <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2">
                    <Heading  Title= {this.state.title}/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <h1>Add a food item</h1>
                    <div className="row">
                      <div className="col-sm-12">
                        <input type ="text" style={styles.input} value ={ this.state.dummy } onChange={this.setItem} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <button className="btn" style={styles.button} onClick={this.addItem}>Add food item</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-sm-offset-1">
                    <Content item={this.state.listOfFood} delete={this.deleteItem}/>
                  </div>
                </div>
               </div>
               <script  src="/bundle.js" />
            </body>
         </html>
         
      )
   }
}


module.exports = Container