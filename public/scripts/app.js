'use strict';

var appRoot = document.getElementById('app');
var btnText = 'Show details';
var hiddenVar = true;

var showHide = function showHide() {
    if (hiddenVar) {
        btnText = 'Hide details';
        hiddenVar = false;
        render();
    } else {
        btnText = 'Show details';
        hiddenVar = true;
        render();
    }
};

var render = function render() {
    var domStructure = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: showHide },
            btnText
        ),
        React.createElement(
            'p',
            { hidden: hiddenVar },
            'Hidden text shown'
        )
    );
    ReactDOM.render(domStructure, appRoot);
};

render();
