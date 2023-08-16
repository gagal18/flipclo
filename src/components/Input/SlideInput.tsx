import {FC}  from 'react';
import {SlideInputProps} from "../../interface/IFormInput";



const FormInput:FC<SlideInputProps> = ({ title, value, onChange, step, max }) => {
    return (
        <label className={"flex gap-[10px] items-center justify-between"}>
            <span>{title}:</span>
            <input onChange={onChange} type="range" min={0} max={max} value={value} className="range" step={step} />
            <div className={""}>
                {value}
            </div>
        </label>
    );
};

export default FormInput;
