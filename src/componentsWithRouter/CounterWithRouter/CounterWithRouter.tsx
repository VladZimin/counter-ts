import React from 'react'
import {useNavigate} from 'react-router-dom'
import {CustomButton} from '../../components/CustomButton'
import s from './CounterWithRouter.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../store/store'
import {incCounterAC, resetCounterAC} from '../../store/counterReducer'

export const CounterWithRouter = () => {

    const navigate = useNavigate()
    const maxValue = useSelector((state: RootStateType) => state.maxValue)
    const startValue = useSelector((state: RootStateType) => state.startValue)
    const counterValue = useSelector((state: RootStateType) => state.counterValue)

    const dispatch = useDispatch()
    const onClickSettings = () => {
        navigate('/settings')
    }
    const onIncHandler = () => {
        dispatch(incCounterAC())
    }
    const onResetHandler = () => {
        dispatch(resetCounterAC())
    }

    const incDisabled = counterValue === maxValue
    const resetDisabled = counterValue === startValue

    return <div className={'container'}>
        <div className={`contentBlock ${s.counterRouter}`}>
            <span className={incDisabled ? s.maxValueColor : ''}>{counterValue}</span>
        </div>
        <div className={'buttonsBlock'}>
            <CustomButton onClick={onIncHandler}
                          disabled={incDisabled}>INC</CustomButton>
            <CustomButton onClick={onResetHandler}
                          disabled={resetDisabled}>RESET</CustomButton>
            <CustomButton onClick={onClickSettings}>SET</CustomButton>
        </div>
    </div>
}




