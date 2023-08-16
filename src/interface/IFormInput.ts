import {ChangeEvent} from "react";

export interface FormInputProps {
    title: string;
    value: number | string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface SlideInputProps extends FormInputProps {
    max: number;
    step: number;
}
