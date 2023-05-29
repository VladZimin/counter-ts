import React from 'react'
import {NumberBlock} from './NumberBlock/NumberBlock'
import {CustomButton} from '../CustomButton'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../store/store'
import {incCounterAC, resetCounterAC} from '../../store/counterReducer'

export const CounterBlock = () => {

    const counterValue = useSelector((state: RootStateType) => state.counterValue)
    const maxValue = useSelector((state: RootStateType) => state.maxValue)
    const startValue = useSelector((state: RootStateType) => state.startValue)
    const isChangingSettings = useSelector((state: RootStateType) => state.isChangingSettings)
    const dispatch = useDispatch()

    const incDisabled = isChangingSettings || (counterValue === maxValue)
    const resetDisabled = isChangingSettings || (counterValue === startValue)

    const onIncHandler = () => {
        dispatch(incCounterAC())
    }
    const onResetHandler = () => {
        dispatch(resetCounterAC())
    }

    return (
        <div className={'container'}>
            <NumberBlock counterValue={counterValue}
                         incDisabled={incDisabled}
                         isChangingSettings={isChangingSettings}
            />
            <div className={'buttonsBlock'}>
                <CustomButton onClick={onIncHandler}
                              disabled={incDisabled}>INC</CustomButton>
                <CustomButton onClick={onResetHandler}
                              disabled={resetDisabled}>RESET</CustomButton>
            </div>
        </div>
    )
}




