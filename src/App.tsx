import React, {useEffect, useState} from 'react';
import './App.css';
import {Input} from "./components/Input";
import {Button} from "./components/Button";


function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [count, setCount] = useState(0)
    useEffect(() => {
        let countValueMix = Number(localStorage.getItem('minValueCount'))
        let countValueMax = Number(localStorage.getItem('maxValueCount'))
        if(countValueMax){setMaxValue(countValueMax)}
        if (countValueMix) {
            setCount(countValueMix)
            setMinValue(countValueMix)
        }
    }, [])
    const set = () => {
        // localStorage.setItem('minValueCount', JSON.stringify(minValue))
        // localStorage.setItem('maxValueCount', JSON.stringify(maxValue))
        let countValue = localStorage.getItem('minValueCount')
        if (countValue) {
            setCount(JSON.parse(countValue))
        }
    }

    const setInputMax = (value: number) => {
        localStorage.setItem('maxValueCount', JSON.stringify(value))
        setMaxValue(value)
    }
    const setInputMin = (value: number) => {
        localStorage.setItem('minValueCount', JSON.stringify(value))
        setMinValue(value)
    }
    const countButton = () => {
        let countValueMax = localStorage.getItem('maxValueCount')
        if (countValueMax) {
            if (count < JSON.parse(countValueMax)) {
                setCount(count + 1)
            }
        }
    }
    const restButton = () => {
        let countValue = localStorage.getItem('minValueCount')
        if (countValue) {
            setCount(JSON.parse(countValue))
        }
    }
    const clearLocalStorage = () => {
        localStorage.clear()
    }
    let spanText = maxValue<1 || minValue < 0 || maxValue < minValue ?'Incorrect value':count
    let spanCountClass = () => {
        if(maxValue<1 || minValue < 0 || maxValue < minValue){return 'spanCount spanRed'}
        if(count===maxValue){return 'spanCount spanRed'}
        else{return 'spanCount'}
    }
    return (
        <div className="App">
            <div className='section'>
                <div className='box_inputs'>
                    <section className='box_section_input'>
                        <span className='span'>MAX VALUE:</span>
                        <Input type={'number'}
                            // setValue={setMaxValue}
                               value={maxValue}
                               setInput={setInputMax}
                               classNameInput={maxValue<1||maxValue<minValue?'input':''}
                        />
                    </section>
                    <section className='box_section_input'>
                        <span className='span'>MIN VALUE:</span>
                        <Input type={'number'}
                            // setValue={setMinValue}
                               value={minValue}
                               setInput={setInputMin}
                               classNameInput={minValue<0||minValue>maxValue?'input':''}
                        />
                    </section>
                </div>
                <div>
                    <Button classNameButton={'button'} name={'SET'} collBack={set}/>
                </div>
            </div>
            <div className='section'>
                <span className={spanCountClass()}>{spanText}</span>
                <div className='box_Button'>
                    <Button classNameButton={count===maxValue?'buttonDisabled':'button'} name={'INC'} collBack={countButton}/>
                    <Button classNameButton={count===minValue?'buttonDisabled':'button'} name={'RES'} collBack={restButton}/>
                </div>
                {/*<Button name={'clear localStorage'} collBack={clearLocalStorage}/>*/}
            </div>
        </div>
    );
}

export default App;
