import React, { Component } from 'react';

export interface ITimedInput {
    setState: Function,
    componentWillUnmount: () => void,
    changeParam: (val: number, name: string) => void
}

class TimedInput extends Component implements ITimedInput{
    state: object;
    constructor(props: object) {
        super(props);
        this.state = {
            obj: null,
            timer: null
        };
    }

    componentWillUnmount(): void {
        const { timer } = this.state;
        clearTimeout(timer);
    }

    changeParam: (val: number, name: string) => void = (val, name) => {

        const { name: n, onChangeTimed, onChange, time }: any = this.props;
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
        const { name } = this.props;
        return (
            <div className="App">
            <input
                onChange={event => {
                    const val: number = Number(event.currentTarget.value);
                    this.changeParam(val, name);
                }}
            />
        </div>
    );
    }
}

export default TimedInput;
