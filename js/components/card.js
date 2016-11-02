var React = require('react');
var ReactDOM = require('react-dom');

var CardText = function() {
    return (
        <Card name="Derek Zoolander"/>
    );
};

var Card = function(props) {
    return (
        <div className="card">
            {props.name}
        </div>
    );
};






module.exports = Card;

