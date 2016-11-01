require('babel-polyfill');

var React = require('react');
var ReactDOM = require('react-dom');

var BoardList = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<BoardList />, document.getElementById('app'));
});