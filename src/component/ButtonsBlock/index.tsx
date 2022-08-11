import React from 'react'
import s from './ButtonsBlock.module.css'
import {Button} from '../Button'

type PropsType = {
    onClickInc: () => void
    onClickReset: () => void
    resetDisabled: boolean
    incDisabled: boolean
}

export const ButtonsBlock = (props: PropsType) => {
    return (
        <div className={s.buttonsBlock}>
            <Button name={'inc'} onClick={props.onClickInc}
                    disabled={props.incDisabled}>inc</Button>
            <Button name={'reset'} onClick={props.onClickReset}
                    disabled={props.resetDisabled}>reset</Button>
        </div>
    )
}






