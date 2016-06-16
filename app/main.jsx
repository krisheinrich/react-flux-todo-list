var React = require('react');
var ReactDOM = require('react-dom');

console.log("Hey from JSX!");

var GroceryItemList = require('./components/GroceryItemList.jsx');
var groceryItemStore = require('./stores/GroceryItemStore.jsx');
var initialItems = groceryItemStore.getItems();

function render() {
  ReactDOM.render(<GroceryItemList items={initialItems}/>, app);
}

groceryItemStore.onChange(function (items) {
  initialItems = items;
  render();
});

// Initial page load
render();