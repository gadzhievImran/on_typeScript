import React, { Component } from 'react';

class TI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: null,
            timer: null
        };
    }

    componentWillUnmount() {
        const { timer } = this.state;
        clearTimeout(timer);
    }

    changeParam = (val, name) => {
        const { name: n, onChangeTimed, onChange, time } = this.props;
        this.setState(
            state => {
                clearTimeout(this.state.timer);
                let obj = {
                    val,
                    name: n
                };
                return {
                    obj
                };
            },
            () => {
                const { obj } = this.state;
                onChange(obj);
                if (onChangeTimed) {
                    let timer = setTimeout(() => {
                        onChangeTimed(obj);
                    }, time ? time : 500);
                    this.setState({ timer });
                }
            }
        );
    };

    render() {
        return (
            <div className="App">
                <input
                    onChange={event => {
                        this.changeParam(event.currentTarget.value, this.props.name);
                    }}
                />
            </div>
        );
    }
}

export default TI;

