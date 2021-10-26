const appRoot = document.getElementById('app');
let btnText = 'Show details';
let hiddenVar = true;

const showHide = () => {
    if (hiddenVar) {
        btnText = 'Hide details';
        hiddenVar = false;
        render();
    } else {
        btnText = 'Show details';
        hiddenVar = true;
        render();
    }
}

const render = () => {
    const domStructure = (
        <div>
            <h1>Visibility toggle</h1>
            <button onClick={showHide}>{btnText}</button>
            <p hidden={hiddenVar}>Hidden text shown</p>
        </div>
    );
    ReactDOM.render(domStructure, appRoot)
}

render();