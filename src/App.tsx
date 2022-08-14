import React, {useEffect, useState} from 'react'
import {CounterBlock} from './component/CounterBlock'
import './App.css'
import {SettingsBlock} from './component/SettingsBlock'

export const App = () => {
    const [maxValue, setMaxValue] = useState(5)
    const [startValue, setStartValue] = useState(0)
    const [counterValue, setCounterValue] = useState(startValue)
    const [isChangingSettings, setIsChangingSettings] = useState(false)

    // Get values from LocalStorage and set them to State
    useEffect(() => {
        const localStorageValue = localStorage.getItem('settingsValues')
        if (localStorageValue) {
            const {maxValue, startValue} = (JSON.parse(localStorageValue))
            setStartValue(startValue)
            setMaxValue(maxValue)
            setCounterValue(startValue)
        }
    }, [])

    const onIncHandler = () => setCounterValue((value) => ++value)
    const onResetHandler = () => setCounterValue(startValue)

    const onChangeMaxValue = (value: string) => {
        setMaxValue(+value)
        setIsChangingSettings(true)
    }
    const onChangeStartValue = (value: string) => {
        setStartValue(+value)
        setIsChangingSettings(true)
    }

    //Set values to LocalStorage, change settings status and set value to counter state
    const onClickSet = () => {
        localStorage.setItem('settingsValues', JSON.stringify({maxValue, startValue}))
        setIsChangingSettings(false)
        setCounterValue(startValue)
    }

    // Disabled buttons for Counter Block
    const incrementDisabled = counterValue === maxValue
    const resetDisabled = counterValue === startValue

    // Validation inputs for Settings Block
    const compareMaxStart = maxValue < startValue || maxValue === startValue
    const startValueError = startValue < 0 || compareMaxStart
    const isSetBtnDisabled = !isChangingSettings || (compareMaxStart || startValueError)
    const errorInfo = (compareMaxStart || startValueError) && 'Invalid values!'

    return (
        <>
            <SettingsBlock
                maxValue={maxValue}
                maxValueError={compareMaxStart}
                startValue={startValue}
                startValueError={startValueError}
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
                onClickSet={onClickSet}
                isSetBtnDisabled={isSetBtnDisabled}
            />
            <CounterBlock
                value={counterValue}
                onClickInc={onIncHandler}
                onClickReset={onResetHandler}
                incDisabled={incrementDisabled}
                resetDisabled={resetDisabled}
                errorInfo={errorInfo}
                isChangingSettings={isChangingSettings}
            />
        </>

    )
}







