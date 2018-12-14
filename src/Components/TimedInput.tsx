import * as React from 'react';

export interface ITimedInput {
    changeParam: (val: number, name: string) => void
}

export interface IState {
    obj: object | null;
    timer: number | null;
}

class TimedInput extends React.Component implements ITimedInput{
    constructor(props: object) {
        super(props);
        this.state = {
            obj: null,
            timer: null
        };
    }

    componentWillUnmount(): void {
        const { timer }: any = this.state;
        clearTimeout(timer as number);
    }

    changeParam: (val: number, name: string) => void = (val, name) => {

        const { name: n, onChangeTimed, onChange, time }: any = this.props;
        this.setState(
            () => {
                const { timer }: any = this.state;
                clearTimeout(timer as number);
                let obj = {
                    val,
                    name: n
                };
                return {
                    obj
                };
            },
            () => {
                const { obj }: any = this.state;
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

    render(): object {
        const { name }: any = this.props;
        return (
            <div className="App">
            <input
                onChange={event => {
                    const val: number = Number(event.currentTarget.value);
                    this.changeParam(val, name as string);
                }}
            />
        </div>
    );
    }
}

export default TimedInput;
