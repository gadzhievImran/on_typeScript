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
