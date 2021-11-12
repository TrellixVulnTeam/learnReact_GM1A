'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.visibility = _this.visibility.bind(_this);
        _this.state = {
            text: 'Text is not visible',
            action: 'Show details',
            tracker: true
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: 'visibility',
        value: function visibility() {
            var _this2 = this;

            this.setState(function () {
                if (!_this2.state.tracker) {
                    return {
                        text: 'Text is not visible',
                        action: 'Show details',
                        tracker: true

                    };
                } else {
                    return {
                        text: 'Text is visible',
                        action: 'Hide details',
                        tracker: false
                    };
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.text
                ),
                React.createElement(
                    'button',
                    { onClick: this.visibility },
                    this.state.action
                ),
                React.createElement(
                    'p',
                    { hidden: this.state.tracker },
                    'Now you can see this text'
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app'));
