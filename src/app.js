//Variables
const appRoot = document.getElementById('app');
const user = {
    name: 'Aleks',
    age: 26,
    location: 'Ukraine'
};
const tempData = {
    title: 'Indecision App',
    subTitle: 'Challenge subtitle',
    options: ['One', 'Two']
}

//JSX = javaScript XML
//Make sure to have srapper div
const template = (
    < div >
        <h1>{tempData.title}</h1>
        {tempData.subTitle && <p>{tempData.subTitle}</p>}
        <p>{tempData.options.length > 0 ? 'Here are your options:' : 'No options'}</p>

        <ol>
            <li>{tempData.options[0]}</li>
            <li>{tempData.options[1]}</li>
        </ol>
    </div >
);


function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
// h1 is a turnery operator
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

ReactDOM.render(template, appRoot);

