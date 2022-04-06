import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

export interface IInput {
    inputType: string;
    required: boolean;
    placeholder: string;
    id: string;
    value: string;
    min: string;
    maxlength: number;
}


export const Input: FC<IInput> = ({ inputType, required, placeholder, id, value, min, maxlength }) => {
    const agreenment = useAppSelector(state => state.user.agreenment);
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (value === 'checkbox') {
            dispatch({ type: 'updateFields', payload: { key: id, value: !agreenment } })
        } else {
            dispatch({ type: 'updateFields', payload: { key: id, value: e.target.value } })
        }
    }

    return <input onChange={handleChange} value={value} type={inputType} required={required} placeholder={placeholder} id={id} min={min} maxLength={maxlength} />;
};
