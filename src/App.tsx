import React, {useEffect, useState} from 'react'
import {CounterBlock} from './component/CounterBlock'
import './App.css'
import {SettingsBlock} from './component/SettingsBlock'

export const App = () => {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(2)
    const [value, setValue] = useState<number>(startValue)
    const [isChangingSettings, setIsChangingSettings] = useState<boolean>(false)

    useEffect(() => {
        setValue(startValue)
    }, [isChangingSettings])

    const onIncHandler = () => setValue((value) => ++value)
    const onResetHandler = () => setValue(startValue)

    const onChangeMaxValue = (value: string) => {
        setMaxValue(+value)
        setIsChangingSettings(true)
    }
    const onChangeStartValue = (value: string) => {
        setStartValue(+value)
        setIsChangingSettings(true)
    }
    const onClickSet = () => {
        setIsChangingSettings(false)
    }

    const incrementError = value === maxValue
    const resetValue = value === startValue

    const maxValueError = maxValue < 0 || maxValue < startValue || maxValue === startValue
    const startValueError = startValue < 0 || maxValue < startValue || maxValue === startValue
    const isSetBtnDisabled = !isChangingSettings || (maxValueError || startValueError)
    const errorInfo = (maxValueError || startValueError) && 'Invalid values!'

    return (
        <>
            <SettingsBlock maxValue={maxValue} startValue={startValue} onChangeStartValue={onChangeStartValue}
                           onChangeMaxValue={onChangeMaxValue} onClickSet={onClickSet}
                           isSetBtnDisabled={isSetBtnDisabled} startValueError={startValueError}
                           maxValueError={maxValueError}/>
            <CounterBlock onClickInc={onIncHandler} onClickReset={onResetHandler} resetDisabled={resetValue}
                          incDisabled={incrementError} value={value} error={incrementError}
                          isChangingSettings={isChangingSettings} errorInfo={errorInfo}/>
        </>

    )
}







