import {FC}  from 'react';
import {FormInputProps} from "../../interface/IFormInput";



const FormInput:FC<FormInputProps> = ({ title, value, onChange }) => {
    return (
        <label className={"flex gap-[10px] items-center justify-between"}>
            <span>{title}:</span>
            <input
                type="number"
                className="input max-w-xs h-[2rem]"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default FormInput;
