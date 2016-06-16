var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hey from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initialItems = [{
  name: "Ice Cream"
},{
  name: "Waffles"
},{
  name: "Candy",
  purchased: true
},{
  name: "Snarks"
}];

ReactDOM.render(<GroceryItemList items={initialItems}/>, app);