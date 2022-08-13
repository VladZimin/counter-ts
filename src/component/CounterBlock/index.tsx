import React from 'react'
import s from './CounterBlock.module.css'
import {ButtonsBlock} from './ButtonsBlock'
import {NumberBlock} from './NumberBlock'

export type ButtonsBlockProps = {
    onClickInc: () => void
    onClickReset: () => void
    resetDisabled: boolean
    incDisabled: boolean
    isChangingSettings: boolean
}

export type NumberBlockProps = {
    value: number
    error: boolean
    errorInfo: string | boolean
    isChangingSettings: boolean
}

type PropsType = ButtonsBlockProps & NumberBlockProps

export const CounterBlock = (props: PropsType) => {

    return (
        <div className={s.container}>
            <NumberBlock value={props.value} error={props.error} isChangingSettings={props.isChangingSettings}
                         errorInfo={props.errorInfo}/>
            <ButtonsBlock onClickInc={props.onClickInc} onClickReset={props.onClickReset}
                          resetDisabled={props.resetDisabled}
                          incDisabled={props.incDisabled} isChangingSettings={props.isChangingSettings}/>
        </div>
    )

}




