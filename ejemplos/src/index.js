import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable';
import './index.css';

let db = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Foods", price: "$9.99", stocked: true, name: "Hot Dog"},
  {category: "Foods", price: "$19.99", stocked: false, name: "Burger"}
];

<h1 class= "" ></h1>

const app = document.getElementById('app');
ReactDOM.render(<FilterableProductTable store={db}/>, app);