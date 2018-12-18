import * as React from 'react';
import * as PropTypes from 'prop-types';

interface ITodoItemState {
    params: null | object;
    timer: null | object;
}

interface ITodoItemProps {
    onChange: (val: number, name: string) => void;
    name: string;
    time: number;
    onChangeTimed: (val: number, name: string) => void
}

class TimedInput extends React.Component <ITodoItemProps, ITodoItemState>{
    static propTypes = {
        name: PropTypes.string,
        onchange: PropTypes.func,
        onChangeTimed: PropTypes.func,
        time: PropTypes.number
    };
    static defaultProps = {
        time: 500
    };

    constructor(props: ITodoItemProps) {
        super(props as ITodoItemProps);

        this.state = {
            params: null,
            timer: null
        };
    }

    componentWillUnmount(): void {
        const { timer }: any = this.state;
        clearTimeout(timer as number);
    }

    changeParam: (val: number, names: string) => void = (val, names) => {

        const { name, onChangeTimed, onChange, time }: any = this.props;
        this.setState(
            () => {
                const { timer }: any = this.state;
                clearTimeout(timer as number);
                let params = {
                    val,
                    name
                };
                return {
                    params
                };
            },
            () => {
                const { params }: any = this.state;
                console.log('params', params);
                onChange(params);
                if (onChangeTimed) {
                    let timer = setTimeout(() => {
                        onChangeTimed(params);
                    }, time ? time : 500);
                    this.setState({ timer });
                }
            }
        );
    };

    render(): object {
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
