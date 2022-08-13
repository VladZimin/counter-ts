import React from 'react'
import s from './ButtonsBlock.module.css'
import {Button} from '../../Button'
import {ButtonsBlockProps} from '../index'

export const ButtonsBlock = (props: ButtonsBlockProps) => {

    const incBtnDisabled = props.isChangingSettings || props.incDisabled
    const resetBtnDisabled = props.isChangingSettings || props.resetDisabled

    return (
        <div className={s.buttonsBlock}>
            <Button onClick={props.onClickInc}
                    disabled={incBtnDisabled}>inc</Button>
            <Button onClick={props.onClickReset}
                    disabled={resetBtnDisabled}>reset</Button>
        </div>
    )
}






