import React, {ChangeEvent} from "react";

type PropsType = {
    type: string
    // setValue: (value: number)=>void
    value: number
    setInput: (value:number)=>void
    classNameInput: string
}

export const Input = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // props.setValue(Number(e.currentTarget.value))
        props.setInput(Number(e.currentTarget.value))
    }
    return(
        <input type={props.type} onChange={onChangeHandler} value={props.value} className={props.classNameInput}/>
    )
}