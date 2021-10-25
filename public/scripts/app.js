'use strict';

//Variables
var appRoot = document.getElementById('app');
var user = {
    name: 'Aleks',
    age: 26,
    location: 'Ukraine'
};
var tempData = {
    title: 'Indecision App',
    subTitle: 'Challenge subtitle',
    options: ['One', 'Two']

    //JSX = javaScript XML
    //Make sure to have srapper div
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        tempData.title
    ),
    tempData.subTitle && React.createElement(
        'p',
        null,
        tempData.subTitle
    ),
    React.createElement(
        'p',
        null,
        tempData.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            tempData.options[0]
        ),
        React.createElement(
            'li',
            null,
            tempData.options[1]
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
// h1 is a turnery operator
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

ReactDOM.render(template, appRoot);
