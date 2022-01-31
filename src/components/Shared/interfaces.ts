export interface IInputProps {
    min: number;
    max: number;
    value: number;
    onValueChange: (value: number) => void;
}