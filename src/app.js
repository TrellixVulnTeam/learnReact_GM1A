// const obj = {
//     name: 'Test',
//     getName() {
//         return this.name;
//     }

// };
// const getName = obj.getName.bind(obj);

// console.log(getName())


class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life on random';
        const options = ['One', 'Two', 'Three'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handle Picked');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        console.log(this.props.options)
        // alert('All removed');
    }
    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
                <button>Remove</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    submitAction(event) {
        event.preventDefault();
        let input = event.target.elements.option.value.trim();
        if (input) {
            alert(input);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitAction}>
                    <input type='text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

