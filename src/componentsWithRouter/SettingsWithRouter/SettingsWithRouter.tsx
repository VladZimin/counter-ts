import React from 'react'
import s from './SettingsWithRouter.module.css'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../store/store'
import {changeMaxValueAC, changeStartValueAC, setCounterValueAC} from '../../store/counterReducer'
import {CustomButton} from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

export const SettingsWithRouter = () => {

    const navigate = useNavigate()
    const maxValue = useSelector((state: RootStateType) => state.maxValue)
    const startValue = useSelector((state: RootStateType) => state.startValue)

    const dispatch = useDispatch()
    const onChangeMaxValue = (value: string) => {
        dispatch(changeMaxValueAC(Number(value)))
    }
    const onChangeStartValue = (value: string) => {
        dispatch(changeStartValueAC(Number(value)))

    }
    const onClickSet = () => {
        dispatch(setCounterValueAC())
        navigate('/')
    }

    const compareMaxStart = maxValue < startValue || maxValue === startValue
    const startValueError = startValue < 0 || compareMaxStart
    const isSetBtnDisabled = compareMaxStart || startValueError

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




