import React from "react";
import '../App.css';

type PropsType = {
    name: string
    collBack: () => void
    classNameButton: string
}

export const Button = (props:PropsType) => {
    const onClickHandler = () => {
        props.collBack()
    }
    return(
        <button className={props.classNameButton} onClick={onClickHandler}>{props.name}</button>
    )
}