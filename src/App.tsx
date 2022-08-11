import React, {useState} from 'react'
import s from './App.module.css'
import {CounterBlock} from './component/CounterBlock'
import {ButtonsBlock} from './component/ButtonsBlock'

export const App = () => {
    const [value, setValue] = useState<number>(0)

    const onIncHandler = () => setValue((value) => ++value)
    const onResetHandler = () => setValue(0)
    const maxValueError = value === 5
    const resetValue = value === 0
    return (
        <>
            <div className={s.container}>
                <CounterBlock value={value} error={maxValueError}/>
                <ButtonsBlock onClickInc={onIncHandler} onClickReset={onResetHandler} resetDisabled={resetValue}
                              incDisabled={maxValueError}/>
            </div>
            <div className={s.container}>
                <CounterBlock value={value} error={maxValueError}/>
                <ButtonsBlock onClickInc={onIncHandler} onClickReset={onResetHandler} resetDisabled={resetValue}
                              incDisabled={maxValueError}/>
            </div>
        </>

    )
}







