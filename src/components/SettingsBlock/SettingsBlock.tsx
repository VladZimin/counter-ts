import React from 'react'
import {CustomButton} from '../CustomButton'
import s from './SettingsBlock.module.css'
import CustomInput from '../CustomInput'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../store/store'
import {changeMaxValueAC, changeStartValueAC, setCounterValueAC, setErrorInfoAC} from '../../store/counterReducer'

export const SettingsBlock = () => {

    const maxValue = useSelector((state: RootStateType) => state.maxValue)
    const startValue = useSelector((state: RootStateType) => state.startValue)
    const isChangingSettings = useSelector((state: RootStateType) => state.isChangingSettings)

    const dispatch = useDispatch()
    const onChangeMaxValue = (value: string) => {
        dispatch(changeMaxValueAC(Number(value)))
    }
    const onChangeStartValue = (value: string) => {
        dispatch(changeStartValueAC(Number(value)))

    }
    const onClickSet = () => {
        dispatch(setCounterValueAC())

    }
    const compareMaxStart = maxValue < startValue || maxValue === startValue
    const startValueError = startValue < 0 || compareMaxStart
    if (compareMaxStart || startValueError) {
        dispatch(setErrorInfoAC('Invalid values'))
    } else {
        dispatch(setErrorInfoAC(''))
    }
    const isSetBtnDisabled = !isChangingSettings || (compareMaxStart || startValueError)

    return (
        <div className={'container'}>
            <div className={'contentBlock'}>
                <label className={s.labelsText}>max value: <CustomInput value={maxValue} type={'number'}
                                                                        onChangeValue={onChangeMaxValue}
                                                                        error={compareMaxStart}/></label>
                <label className={s.labelsText}>start value: <CustomInput onChangeValue={onChangeStartValue}
                                                                          value={startValue}
                                                                          error={startValueError}
                                                                          type={'number'}/></label>
            </div>
            <div className={'buttonsBlock'}>
                <CustomButton onClick={onClickSet} disabled={isSetBtnDisabled}>SET</CustomButton>
            </div>
        </div>
    )
}




