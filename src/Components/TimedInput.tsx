import * as React from 'react';
import {promises} from "fs";

export interface ITodoItemState {
    obj: null | object;
    timer: null | object;
}

export interface ITodoItemProps {
    onChange: (val: number, name: string) => void;
    name: string;
    time: number;
    onChangeTimed: (val: number, name: string) => void
}

class TimedInput extends React.Component <ITodoItemProps, ITodoItemState>{
    constructor(props: object) {
        super(props as ITodoItemProps);

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
        console.log('props', this.props);
        const { name }: any = this.props;
        return (
            <div>
                <div>
                    enter offer_id
                </div>
                <input
                    placeholder="offer_id"
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
