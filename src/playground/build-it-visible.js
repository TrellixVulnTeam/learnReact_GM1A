// const appRoot = document.getElementById('app');
// let btnText = 'Show details';
// let hiddenVar = true;

// const showHide = () => {
//     if (hiddenVar) {
//         btnText = 'Hide details';
//         hiddenVar = false;
//         render();
//     } else {
//         btnText = 'Show details';
//         hiddenVar = true;
//         render();
//     }
// }

// const render = () => {
//     const domStructure = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={showHide}>{btnText}</button>
//             <p hidden={hiddenVar}>Hidden text shown</p>
//         </div>
//     );
//     ReactDOM.render(domStructure, appRoot)
// }

// render();

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.visibility = this.visibility.bind(this);
        this.state = {
            text: 'Text is not visible',
            action: 'Show details',
            tracker: true
        }
    }

    visibility() {
        this.setState(() => {
            if (!this.state.tracker) {
                return {
                    text: 'Text is not visible',
                    action: 'Show details',
                    tracker: true

                };
            }
            else {
                return {
                    text: 'Text is visible',
                    action: 'Hide details',
                    tracker: false
                };
            }

        });
    }

    render() {
        return (<div>
            <h1>{this.state.text}</h1>
            <button onClick={this.visibility}>{this.state.action}</button>
            <p hidden={this.state.tracker}>Now you can see this text</p>
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

