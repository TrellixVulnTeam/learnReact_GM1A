// //Variables
const appRoot = document.getElementById('app');
const user = {
    name: 'Aleks',
    age: 26,
    location: 'Ukraine'
};
const tempData = {
    title: 'Indecision App',
    subTitle: 'Challenge subtitle',
    options: []
}

//JSX = javaScript XML

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        tempData.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};



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

const clearArray = () => {
    tempData.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * tempData.options.length);
    const option = tempData.options[randomNum];
    alert(option)
}

const render = () => {
    //Make sure to have srapper div
    const template = (
        < div >
            <h1>{tempData.title}</h1>
            {tempData.subTitle && <p>{tempData.subTitle}</p>}
            <p>{tempData.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
            <button disabled={tempData.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearArray}>Remove All</button>
            <ol>
                {tempData.options.map((item) => {
                    return <li key={item}>{item}</li>;
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        </div >
    );
    ReactDOM.render(template, appRoot);
}

render();