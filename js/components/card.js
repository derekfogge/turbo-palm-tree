var React = require('react');
var ReactDOM = require('react-dom');

var Card = function() {
    var cardText = 'This is a card';
    return (
        <div className="card">
            {cardText}
        </div>
    );
};

module.exports = Card;