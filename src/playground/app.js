// stateless function component


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({
                    options
                }))
            }
        }
        catch (e) {
            //do nothing
        }
    }
    componentDidUpdate(prevprops, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount() {
        console.log('Will unmount')
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }
    handlePick() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option)
        })
    }
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }))
    }

    handleDeleteOption(optionToRemove) {
        console.log('clicked')
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    render() {
        const subTitle = 'Put your life on random!';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}
Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add options to get started</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}

                    />)
                )
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }
                }
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.submitAction = this.submitAction.bind(this);
        this.state = {
            error: undefined
        }
    }
    submitAction(e) {
        e.preventDefault();
        let option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({
            error
        }))

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitAction}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

//old syntax
class OldSyntax {
    constructor() {
        this.name = 'Aleks';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting())

//New Syntax
class NewSyntax {
    name = 'Aleks';
    getGreeting = () => {
        return `Hi ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGreeting = oldSyntax.getGreeting;
console.log(newGreeting())
console.log(newSyntax)
