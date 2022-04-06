import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

export interface IButton {
    text: string;
    nextStep: boolean;
    finish: boolean;
}

export const Button: FC<IButton> = ({ text, nextStep, finish }) => {
    const state = useAppSelector(state => state);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (nextStep) {
            dispatch({ type: 'nextStep' })
        } else if (finish) {
            dispatch({ type: 'finish' })
            console.log(state);
        }
    }
    return <button onClick={handleClick}>{text}</button>;
};
